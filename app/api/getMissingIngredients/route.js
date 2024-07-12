import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'lib', 'missingIngredients.json');
        console.log('Reading missing ingredients from:', filePath);
        const data = await fs.readFile(filePath, 'utf8');
        console.log('Missing ingredients raw data:', data);
        const missingIngredients = JSON.parse(data);
        console.log('Parsed missing ingredients:', missingIngredients);

        // Fetch details for each missing ingredient
        const detailedIngredients = await Promise.all(missingIngredients.map(async ingredient => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch details for ${ingredient}`);
                }
                const ingredientData = await response.json();
                return ingredientData.ingredients[0];
            } catch (error) {
                console.error(`Error fetching details for ${ingredient}:`, error);
                return null; // Return null if there's an error fetching details
            }
        }));

        // Filter out any null values in case of errors
        const validIngredients = detailedIngredients.filter(ingredient => ingredient !== null);
        console.log('Valid detailed ingredients:', validIngredients);

        return NextResponse.json(validIngredients);
    } catch (error) {
        console.error('Error in getMissingIngredients API:', error);
        return NextResponse.json({ error: 'Failed to fetch missing ingredients' }, { status: 500 });
    }
}
