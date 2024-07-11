const ingredientTypes = {
    ingredients: [
      {
        name: "Light rum",
        type: "Spirit",
        shortDescription: "A milder variant of rum, perfect for light cocktails."
      },
      {
        name: "Applejack",
        type: "Spirit",
        shortDescription: "An American apple brandy, used in classic cocktails."
      },
      {
        name: "Gin",
        type: "Spirit",
        shortDescription: "A juniper-flavored spirit, essential for Martinis and Gin & Tonics."
      },
      {
        name: "Dark rum",
        type: "Spirit",
        shortDescription: "A rich, aged rum, ideal for dark cocktails."
      },
      {
        name: "Sweet Vermouth",
        type: "Liqueur",
        shortDescription: "A sweet fortified wine, crucial for Manhattans."
      },
      {
        name: "Strawberry schnapps",
        type: "Liqueur",
        shortDescription: "A sweet, strawberry-flavored liqueur."
      },
      {
        name: "Scotch",
        type: "Spirit",
        shortDescription: "A whiskey from Scotland, enjoyed neat or in cocktails."
      },
      {
        name: "Apricot brandy",
        type: "Liqueur",
        shortDescription: "A sweet apricot-flavored brandy."
      },
      {
        name: "Triple sec",
        type: "Liqueur",
        shortDescription: "An orange-flavored liqueur used in Margaritas."
      },
      {
        name: "Southern Comfort",
        type: "Liqueur",
        shortDescription: "A fruit, spice, and whiskey flavored liqueur."
      },
      {
        name: "Orange bitters",
        type: "Bitters",
        shortDescription: "A type of bitters flavored with orange peel."
      },
      {
        name: "Brandy",
        type: "Spirit",
        shortDescription: "A spirit distilled from wine, enjoyed neat or in cocktails."
      },
      {
        name: "Lemon vodka",
        type: "Spirit",
        shortDescription: "Vodka infused with lemon flavor."
      },
      {
        name: "Blended whiskey",
        type: "Spirit",
        shortDescription: "A blend of different whiskeys, used in various cocktails."
      },
      {
        name: "Dry Vermouth",
        type: "Liqueur",
        shortDescription: "A dry fortified wine, essential for Martinis."
      },
      {
        name: "Amaretto",
        type: "Liqueur",
        shortDescription: "A sweet almond-flavored liqueur."
      },
      {
        name: "Tea",
        type: "Non-Alcoholic",
        shortDescription: "A refreshing non-alcoholic beverage."
      },
      {
        name: "Champagne",
        type: "Wine",
        shortDescription: "A sparkling wine from the Champagne region of France."
      },
      {
        name: "Coffee liqueur",
        type: "Liqueur",
        shortDescription: "A liqueur flavored with coffee."
      },
      {
        name: "Bourbon",
        type: "Spirit",
        shortDescription: "A type of American whiskey made from corn."
      },
      {
        name: "Tequila",
        type: "Spirit",
        shortDescription: "A Mexican spirit made from the agave plant."
      },
      {
        name: "Vodka",
        type: "Spirit",
        shortDescription: "A clear, neutral spirit used in many cocktails."
      },
      {
        name: "Añejo rum",
        type: "Spirit",
        shortDescription: "Aged rum with a rich flavor profile."
      },
      {
        name: "Bitters",
        type: "Bitters",
        shortDescription: "A concentrated flavoring used in cocktails."
      },
      {
        name: "Sugar",
        type: "Sweetener",
        shortDescription: "A common sweetener used in cocktails."
      },
      {
        name: "Kahlua",
        type: "Liqueur",
        shortDescription: "A coffee-flavored liqueur from Mexico."
      },
      {
        name: "Demerara Sugar",
        type: "Sweetener",
        shortDescription: "A type of raw sugar with a rich flavor."
      },
      {
        name: "Dubonnet Rouge",
        type: "Liqueur",
        shortDescription: "A sweet, aromatic wine-based aperitif."
      },
      {
        name: "Watermelon",
        type: "Fruit",
        shortDescription: "A juicy, sweet fruit used in cocktails."
      },
      {
        name: "Lime juice",
        type: "Juice",
        shortDescription: "Freshly squeezed juice from limes."
      },
      {
        name: "Irish whiskey",
        type: "Spirit",
        shortDescription: "A whiskey made in Ireland."
      },
      {
        name: "Apple brandy",
        type: "Liqueur",
        shortDescription: "A brandy made from apples."
      },
      {
        name: "Carbonated water",
        type: "Mixer",
        shortDescription: "Water with dissolved carbon dioxide gas."
      },
      {
        name: "Cherry brandy",
        type: "Liqueur",
        shortDescription: "A sweet brandy flavored with cherries."
      },
      {
        name: "Creme de Cacao",
        type: "Liqueur",
        shortDescription: "A chocolate-flavored liqueur."
      },
      {
        name: "Grenadine",
        type: "Sweetener",
        shortDescription: "A sweet, red syrup made from pomegranates."
      },
      {
        name: "Port",
        type: "Wine",
        shortDescription: "A sweet, fortified wine from Portugal."
      },
      {
        name: "Coffee brandy",
        type: "Liqueur",
        shortDescription: "A brandy flavored with coffee."
      },
      {
        name: "Red wine",
        type: "Wine",
        shortDescription: "Wine made from dark-colored grape varieties."
      },
      {
        name: "Rum",
        type: "Spirit",
        shortDescription: "A distilled alcoholic drink made from sugarcane."
      },
      {
        name: "Grapefruit juice",
        type: "Juice",
        shortDescription: "Freshly squeezed juice from grapefruits."
      },
      {
        name: "Ricard",
        type: "Liqueur",
        shortDescription: "A French anise-flavored liqueur."
      },
      {
        name: "Sherry",
        type: "Wine",
        shortDescription: "A fortified wine from Spain."
      },
      {
        name: "Cognac",
        type: "Spirit",
        shortDescription: "A high-quality brandy from the Cognac region of France."
      },
      {
        name: "Sloe gin",
        type: "Liqueur",
        shortDescription: "A gin flavored with sloe berries."
      },
      {
        name: "Apple juice",
        type: "Juice",
        shortDescription: "Juice made from apples."
      },
      {
        name: "Pineapple juice",
        type: "Juice",
        shortDescription: "Juice made from pineapples."
      },
      {
        name: "Lemon juice",
        type: "Juice",
        shortDescription: "Freshly squeezed juice from lemons."
      },
      {
        name: "Sugar syrup",
        type: "Sweetener",
        shortDescription: "A syrup made from sugar and water."
      },
      {
        name: "Milk",
        type: "Dairy",
        shortDescription: "A dairy product used in some cocktails."
      },
      {
        name: "Strawberries",
        type: "Fruit",
        shortDescription: "Fresh strawberries used in cocktails."
      },
      {
        name: "Chocolate syrup",
        type: "Sweetener",
        shortDescription: "A sweet syrup made from chocolate."
      },
      {
        name: "Yoghurt",
        type: "Dairy",
        shortDescription: "A dairy product used in some cocktails."
      },
      {
        name: "Mango",
        type: "Fruit",
        shortDescription: "A tropical fruit used in cocktails."
      },
      {
        name: "Ginger",
        type: "Spice",
        shortDescription: "A spice used in cocktails for its flavor."
      },
      {
        name: "Lime",
        type: "Fruit",
        shortDescription: "A citrus fruit used in cocktails."
      },
      {
        name: "Cantaloupe",
        type: "Fruit",
        shortDescription: "A melon used in cocktails."
      },
      {
        name: "Berries",
        type: "Fruit",
        shortDescription: "Various berries used in cocktails."
      },
      {
        name: "Grapes",
        type: "Fruit",
        shortDescription: "A fruit used in cocktails."
      },
      {
        name: "Kiwi",
        type: "Fruit",
        shortDescription: "A tropical fruit used in cocktails."
      },
      {
        name: "Tomato juice",
        type: "Juice",
        shortDescription: "Juice made from tomatoes."
      },
      {
        name: "Cocoa powder",
        type: "Spice",
        shortDescription: "A powder made from cocoa beans."
      },
      {
        name: "Chocolate",
        type: "Sweetener",
        shortDescription: "A sweet made from cocoa beans."
      },
      {
        name: "Heavy cream",
        type: "Dairy",
        shortDescription: "A dairy product used in cocktails."
      },
      {
        name: "Galliano",
        type: "Liqueur",
        shortDescription: "A sweet herbal liqueur from Italy."
      },
      {
        name: "Peach Vodka",
        type: "Spirit",
        shortDescription: "Vodka infused with peach flavor."
      },
      {
        name: "Ouzo",
        type: "Liqueur",
        shortDescription: "A Greek anise-flavored liqueur."
      },
      {
        name: "Coffee",
        type: "Non-Alcoholic",
        shortDescription: "A brewed beverage made from coffee beans."
      },
      {
        name: "Spiced rum",
        type: "Spirit",
        shortDescription: "Rum infused with spices."
      },
      {
        name: "Water",
        type: "Non-Alcoholic",
        shortDescription: "H2O, essential for life."
      },
      {
        name: "Espresso",
        type: "Non-Alcoholic",
        shortDescription: "A concentrated coffee beverage."
      },
      {
        name: "Angelica root",
        type: "Herb",
        shortDescription: "An herb used in gin production."
      },
      {
        name: "Orange",
        type: "Fruit",
        shortDescription: "A citrus fruit used in cocktails."
      },
      {
        name: "Cranberries",
        type: "Fruit",
        shortDescription: "A tart berry used in cocktails."
      },
      {
        name: "Johnnie Walker",
        type: "Spirit",
        shortDescription: "A brand of Scotch whisky."
      },
      {
        name: "Apple cider",
        type: "Non-Alcoholic",
        shortDescription: "A non-alcoholic beverage made from apples."
      },
      {
        name: "Everclear",
        type: "Spirit",
        shortDescription: "A high-proof grain alcohol."
      },
      {
        name: "Cranberry juice",
        type: "Juice",
        shortDescription: "Juice made from cranberries."
      },
      {
        name: "Egg yolk",
        type: "Non-Alcoholic",
        shortDescription: "The yellow part of an egg."
      },
      {
        name: "Egg",
        type: "Non-Alcoholic",
        shortDescription: "An egg, used in some cocktails."
      },
      {
        name: "Grape juice",
        type: "Juice",
        shortDescription: "Juice made from grapes."
      },
      {
        name: "Peach nectar",
        type: "Juice",
        shortDescription: "Juice made from peaches."
      },
      {
        name: "Lemon",
        type: "Fruit",
        shortDescription: "A citrus fruit used in cocktails."
      },
      {
        name: "Firewater",
        type: "Spirit",
        shortDescription: "A strong alcoholic beverage."
      },
      {
        name: "Lemonade",
        type: "Non-Alcoholic",
        shortDescription: "A sweetened lemon-flavored beverage."
      },
      {
        name: "Lager",
        type: "Beer",
        shortDescription: "A type of beer."
      },
      {
        name: "Whiskey",
        type: "Spirit",
        shortDescription: "A distilled alcoholic beverage made from grains."
      },
      {
        name: "Absolut Citron",
        type: "Spirit",
        shortDescription: "A lemon-flavored vodka."
      },
      {
        name: "Pisco",
        type: "Spirit",
        shortDescription: "A South American brandy."
      },
      {
        name: "Irish cream",
        type: "Liqueur",
        shortDescription: "A cream liqueur made with Irish whiskey."
      },
      {
        name: "Ale",
        type: "Beer",
        shortDescription: "A type of beer brewed using a warm fermentation method."
      },
      {
        name: "Chocolate liqueur",
        type: "Liqueur",
        shortDescription: "A liqueur flavored with chocolate."
      },
      {
        name: "Midori melon liqueur",
        type: "Liqueur",
        shortDescription: "A bright green melon-flavored liqueur."
      },
      {
        name: "Sambuca",
        type: "Liqueur",
        shortDescription: "An Italian anise-flavored liqueur."
      },
      {
        name: "Cider",
        type: "Non-Alcoholic",
        shortDescription: "A fermented apple beverage."
      },
      {
        name: "Sprite",
        type: "Non-Alcoholic",
        shortDescription: "A lemon-lime flavored soda."
      },
      {
        name: "7-Up",
        type: "Non-Alcoholic",
        shortDescription: "A lemon-lime flavored soda."
      },
      {
        name: "Blackberry brandy",
        type: "Liqueur",
        shortDescription: "A sweet brandy flavored with blackberries."
      },
      {
        name: "Peppermint schnapps",
        type: "Liqueur",
        shortDescription: "A peppermint-flavored liqueur."
      },
      {
        name: "Creme de Cassis",
        type: "Liqueur",
        shortDescription: "A sweet, dark red liqueur made from blackcurrants."
      }
    ]
  };
  
  export default ingredientTypes;
  