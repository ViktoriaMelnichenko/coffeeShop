import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MenuList, ProductsList } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
    public navigateId!: number
    public desktopSize: boolean = true;
    public navigationTitle: string = "";
    public url: Subject<string> = new Subject();
    public pageNavigation: BehaviorSubject<string> = new BehaviorSubject('');
  
    public products_coffee: ProductsList[] = [
        {
          product_img: '../../../../assets/images/products/latte.jpg',
          product_title: "Latte",
          product_price: 120,
          product_id: 1,
          product_category: 'Coffee',
          product_discription: `Latte is a popular espresso-based drink made with steamed milk and a small amount of foam. 
                                It is known for its creamy texture and mild coffee flavor, 
                                making it a favorite for those who enjoy a smoother, less intense coffee experience.`,
        },
        {
          product_img: '../../../../assets/images/products/americano.png',
          product_title: "Americano",
          product_price: 100,
          product_id: 2,
          product_category: 'Coffee',
          product_discription: `Americano is a classic coffee drink made by diluting espresso with hot water,
                            creating a milder flavor profile similar to drip coffee but with the strength of espresso`,
        },
        {
          product_img: '../../../../assets/images/products/Bumble.png',
          product_title: "Bumble",
          product_price: 150,
          product_id: 3,
          product_category: 'Coffee',
          product_discription: ` Bumble is a refreshing and visually striking espresso-based 
                                 drink that combines espresso and orange juice.`,
        },
        {
          product_img: '../../../../assets/images/products/cappuccino.png',
          product_title: "Cappuccino",
          product_price: 110,
          product_id: 4,
          product_category: 'Coffee',
          product_discription: `Cappuccino is a classic Italian coffee drink known for its rich flavor and creamy, frothy texture. 
                                It is made with equal parts of espresso, steamed milk, and milk foam, 
                                creating a well-balanced and velvety coffee experience.`,
        },
        {
          product_img: '../../../../assets/images/products/flatWhite.png',
          product_title: "Flat White",
          product_price: 130,
          product_id: 5,
          product_category: 'Coffee',
          product_discription: `Flat White is a smooth and velvety espresso-based coffee drink that originated in Australia or New Zealand. 
                                It is similar to a latte but has a stronger coffee flavor and a silkier 
                                texture due to the way the milk is steamed.`,
        },
        {
          product_img: '../../../../assets/images/products/Espresso.jpg',
          product_title: "Espresso",
          product_price: 60,
          product_id: 6,
          product_category: 'Coffee',
          product_discription: `Espresso is a concentrated form of coffee produced by forcing hot water under high 
                                pressure through finely ground coffee beans..`,
        },
        {
          product_img: '../../../../assets/images/products/CaffèMocha.jpg',
          product_title: "Caffè Mocha",
          product_price: 100,
          product_id: 7,
          product_category: 'Coffee',
          product_discription: `A caffè mocha, also called mocaccino, is a chocolate-flavoured variant of caffè latte, 
                                commonly served warm or hot in a glass rather than a mug.`,
        },
        {
          product_img: '../../../../assets/images/products/Cortado.jpg',
          product_title: "Cortado",
          product_price: 150,
          product_id: 8,
          product_category: 'Coffee',
          product_discription: ` A cortado is a Spanish beverage consisting of espresso mixed 
                                 with a roughly equal amount of warm milk to reduce the acidity`,
        },
        {
          product_img: '../../../../assets/images/products/Ristretto.jpg',
          product_title: "Ristretto",
          product_price: 110,
          product_id: 9,
          product_category: 'Coffee',
          product_discription: `Ristretto  known in full in Italian as caffè ristretto, 
                                is a "short shot" of a highly concentrated espresso coffee.`,
        },
        {
          product_img: '../../../../assets/images/products/Lungo.jpg',
          product_title: "Lungo",
          product_price: 130,
          product_id: 10,
          product_category: 'Coffee',
          product_discription: `Lungo , known in full in Italian as caffè lungo, is a coffee beverage made by using an espresso machine 
                                to make an Italian-style coffee—shrt black with more water, resulting in a larger coffee, a lungo.`,
        }
        ,
        {
          product_img: '../../../../assets/images/products/Breve.jpg',
          product_title: "Breve",
          product_price: 110,
          product_id: 11,
          product_category: 'Coffee',
          product_discription: `Breve coffee is similar to a latte but uses half and half 
                                instead of regular milk, resulting in a rich and decadent drink.`,
        },
        {
          product_img: '../../../../assets/images/products/CaffèMacchiato.jpg',
          product_title: "Caffè macchiato",
          product_price: 130,
          product_id: 12,
          product_category: 'Coffee',
          product_discription: `Caffè macchiato is an espresso coffee drink with a small amount of milk, usually foamed.`,
        }
      ]

    public products_sweets: ProductsList[] = [
        {
          product_img: '../../../../assets/images/products/sohoKirRoyal.jpg',
          product_title: "SoHo Kir Royal",
          product_price: 100,
          product_id: 1,
          product_category: 'sweets',
          product_discription: `Mousse cake made with vanilla mousse, almond biscuit and black currant filling`,
        },
        {
          product_img: '../../../../assets/images/products/sohoTulipField.jpg',
          product_title: "SoHo Tulip Field",
          product_price: 110,
          product_id: 2,
          product_category: 'sweets',
          product_discription: `Mousse cake made with vanilla mousse, marzipan biscuit and peach-raspberry-strawberry filling`,
        },
        {
          product_img: '../../../../assets/images/products/cakeRedVelvet.jpg',
          product_title: "Cake Red Velvet",
          product_price: 120,
          product_id: 3,
          product_category: 'sweets',
          product_discription: `Velvet biscuit, cream cheese`,
        },
        {
          product_img: '../../../../assets/images/products/sohoSorrento.jpg',
          product_title: "SoHo Sorrento",
          product_price: 90,
          product_id: 4,
          product_category: 'sweets',
          product_discription: `Mousse cake made with vanilla mousse, marzipan biscuit and lemon-limoncello filling`,
        },
        {
          product_img: '../../../../assets/images/products/sohoWinterCherry.jpg',
          product_title: "SoHo Winter Cherry",
          product_price: 130,
          product_id: 5,
          product_category: 'sweets',
          product_discription: `Mousse cake made with vanilla mousse, almond biscuit and cherry filling`,
        },
        {
          product_img: '../../../../assets/images/products/CakeOreo.jpg',
          product_title: "Cake Oreo",
          product_price: 100,
          product_id: 6,
          product_category: 'sweets',
          product_discription: `Chocolate biscuit, vanilla cream, oreo cookies`,
        },
        {
          product_img: '../../../../assets/images/products/CakeEsterhazy.jpg',
          product_title: "Cake Esterhazy",
          product_price: 110,
          product_id: 7,
          product_category: 'sweets',
          product_discription: `Almond biscuit, almond cream, covered with white chocolate ganache`,
        },
        {
          product_img: '../../../../assets/images/products/CakeRocher.jpg',
          product_title: "Cake Rocher",
          product_price: 120,
          product_id: 8,
          product_category: 'sweets',
          product_discription: `Chocolate hazelnut biscuit with hazelnut chocolate cream and nutella candies`,
        },
        {
          product_img: '../../../../assets/images/products/CakeAnthill.jpg',
          product_title: "Cake Anthill",
          product_price: 90,
          product_id: 9,
          product_category: 'sweets',
          product_discription: `"Anthill" with caramel and honey cream`,
        },
        {
          product_img: '../../../../assets/images/products/CakeIdeal.jpg',
          product_title: "Cake Ideal",
          product_price: 130,
          product_id: 10,
          product_category: 'sweets',
          product_discription: `Biscuit with walnuts, caramel cream and walnuts`,
        },
        {
          product_img: '../../../../assets/images/products/CakeMikado.jpg',
          product_title: "Cake Mikado",
          product_price: 90,
          product_id: 11,
          product_category: 'sweets',
          product_discription: `Delicate vanilla layers, chocolate cream`,
        },
        {
          product_img: '../../../../assets/images/products/CakeKiev.jpg',
          product_title: "Cake Kiev",
          product_price: 130,
          product_id: 12,
          product_category: 'sweets',
          product_discription: `Biscuit with walnuts, caramel cream, walnuts and meringue`,
        }
      ]  

    public products_coldDrinks: ProductsList[] = [
        {
          product_img: '../../../../assets/images/products/Watermelon-Mint.webp',
          product_title: "Watermelon-Mint",
          product_price: 200,
          product_id: 1,
          product_category: 'coldDrinks',
          product_discription: `We sweetened this refreshing watermelon drink with mint-infused syrup.`,
        },
        {
          product_img: '../../../../assets/images/products/MangoSmoothie.webp',
          product_title: "Mango Smoothie",
          product_price: 220,
          product_id: 2,
          product_category: 'coldDrinks',
          product_discription: `We gave this mango smoothie some tang by blending in yogurt.`,
        },
        {
          product_img: '../../../../assets/images/products/PeachIcedTea.webp',
          product_title: "Peach Iced Tea",
          product_price: 180,
          product_id: 3,
          product_category: 'coldDrinks',
          product_discription: `This recipe calls for rehydrating dried peaches in honey-infused water and English breakfast tea. 
                                It's a low-sugar version of a summer classic that you can feel good about drinking.`,
        },
        {
          product_img: '../../../../assets/images/products/LemonIcedTea.webp',
          product_title: "Lemon Iced Tea",
          product_price: 150,
          product_id: 4,
          product_category: 'coldDrinks',
          product_discription: `This perfect marriage of lemonade and iced tea. This recipe use real lemons, 
                                mint leaves, and freshly brewed black tea.`,
        },
        {
          product_img: '../../../../assets/images/products/TropicalSmoothie.webp',
          product_title: "Tropical Smoothie",
          product_price: 100,
          product_id: 5,
          product_category: 'coldDrinks',
          product_discription: `This fiber-rich smoothie is sweetened with mangoes, carrots, and honey, 
                                while the "cream" comes from coconut milk. 
                                You'll also note a slight tang from apple cider vinegar, which is good for your gut.`,
        },
        {
          product_img: '../../../../assets/images/products/CreamyDateShake.webp',
          product_title: "Creamy Date Shake",
          product_price: 200,
          product_id: 6,
          product_category: 'coldDrinks',
          product_discription: `This is sweetened with ground cinnamon and Medjools dates, which taste a bit like caramel.`,
        },
        {
          product_img: '../../../../assets/images/products/PineappleGingerAle.webp',
          product_title: "Pineapple Ginger Ale",
          product_price: 220,
          product_id: 7,
          product_category: 'coldDrinks',
          product_discription: `Pineapple juice sweetens the tang of ginger ale for this cool drink with tropical vibes.`,
        },
        {
          product_img: '../../../../assets/images/products/FrozenBlueberryLemonade.webp',
          product_title: "Frozen Blueberry Lemonade",
          product_price: 180,
          product_id: 8,
          product_category: 'coldDrinks',
          product_discription: `A drink doesn't get any colder than a slushie, and this four-ingredient 
                                recipe gets one in your hand in 5 minutes. Just blend with ice, pour, and chill out.`,
        },
        {
          product_img: '../../../../assets/images/products/GingeryBerry.webp',
          product_title: "Gingery Berry and Oat Smoothie",
          product_price: 150,
          product_id: 9,
          product_category: 'coldDrinks',
          product_discription: `With the healing antioxidants in blueberries and the gut-healthy fiber in rolled oats, 
                                this smoothie is as good for you as it is delicious. 
                                It also has a bit of a kick from adding fresh ginger to the blend.`,
        },
        {
          product_img: '../../../../assets/images/products/CreamyLemonade.webp',
          product_title: "Creamy Lemonade",
          product_price: 100,
          product_id: 10,
          product_category: 'coldDrinks',
          product_discription: `The drink recipe has just three ingredients—freshly 
                                squeezed lemon juice, water, and sweetened condensed milk.`,
        },
        {
          product_img: '../../../../assets/images/products/TropicalLemonade.webp',
          product_title: "Tropical Lemonade",
          product_price: 150,
          product_id: 11,
          product_category: 'coldDrinks',
          product_discription: `This summer drink recipe is a bit work-intensive—it requires fresh juice from about 12 lemons—but the result is worth it. 
                                Pineapple juice and apricot nectar are among the other ingredients that give this lemonade a tropical upgrade.`,
        },
        {
          product_img: '../../../../assets/images/products/SparklingCantaloupeLemonade.webp',
          product_title: "Sparkling Cantaloupe Lemonade",
          product_price: 100,
          product_id: 12,
          product_category: 'coldDrinks',
          product_discription: `This lemonade has a few twists that no one will see coming. First, there's cantaloupe, 
                                which is certainly not known for its juice. Second, it's spiked with pink peppercorns that give it a certain punch. 
                                Third, the last-minute addition of sparkling water or club soda gives this lemonade a delightful, refreshing fizz.`,
        }
      ]  

    public products_food: ProductsList[] = [
        {
          product_img: '../../../../assets/images/products/arugulaRuinoaSalad.webp',
          product_title: "Arugula and Ruinoa Salad",
          product_price: 55,
          product_id: 1,
          product_category: 'food',
          product_discription: `Arugula, cucumbers, tomatoes, quinoa, greens, sunflower oil /150 g/.`,
        },
        {
          product_img: '../../../../assets/images/products/croissantPiquant.webp',
          product_title: "Croissant Piquant",
          product_price: 900,
          product_id: 2,
          product_category: 'food',
          product_discription: `Croissant, spicy sausage, fendel cheese, lettuce, tomato, cucumber`,
        },
        {
          product_img: '../../../../assets/images/products/tabbouleh.webp',
          product_title: "Tabbouleh",
          product_price: 1700,
          product_id: 3,
          product_category: 'food',
          product_discription: `Bulgur, greens, lettuce, tomato paste, sunflower oil /120 g/.`,
        },
        {
          product_img: '../../../../assets/images/products/croissantWithHam.webp',
          product_title: "Croissant With Ham",
          product_price: 1200,
          product_id: 4,
          product_category: 'food',
          product_discription: `Croissant, ham, cheese, lettuce, tomato, cucumber.`,
        },
        {
          product_img: '../../../../assets/images/products/summerSalad.webp',
          product_title: "Summer Salad",
          product_price: 1500,
          product_id: 5,
          product_category: 'food',
          product_discription: `Tomatoes, cucumbers, greens, sunflower oil /120 g/.`,
        },
        {
          product_img: '../../../../assets/images/products/Vitamin.webp',
          product_title: "Vitamin",
          product_price: 45,
          product_id: 6,
          product_category: 'food',
          product_discription: `Cabbage, apple, pomegranate, celery, parsley, carrot, citric acid, sunflower oil /150 g/`,
        },
        {
          product_img: '../../../../assets/images/products/CaesarSalad.webp',
          product_title: "Caesar Salad",
          product_price: 90,
          product_id: 7,
          product_category: 'food',
          product_discription: `Lettuce, chicken breast, parmesan, cherry tomatoes, caesar sauce, crackers /150 g/`,
        },
        {
          product_img: '../../../../assets/images/products/Lettuce.webp',
          product_title: "Lettuce and carrot salad",
          product_price: 30,
          product_id: 8,
          product_category: 'food',
          product_discription: `Lettuce, carrot, coriander, citric acid, sunflower oil /120 g/`,
        },
        {
          product_img: '../../../../assets/images/products/GreekSalad.webp',
          product_title: "Greek salad",
          product_price: 60,
          product_id: 9,
          product_category: 'food',
          product_discription: `Lettuce, cucumber, tomato, bell pepper, olives, mustard, lemon, feta, olive oil, oregano /150 g/`,
        },
        {
          product_img: '../../../../assets/images/products/Beet.webp',
          product_title: "Beet and walnut salad",
          product_price: 35,
          product_id: 10,
          product_category: 'food',
          product_discription: `Beet, sour cream, mayonnaise, walnuts, greens /120 g/`,
        },
        {
          product_img: '../../../../assets/images/products/ClassicSandwich.webp',
          product_title: "Classic sandwich",
          product_price: 130,
          product_id: 11,
          product_category: 'food',
          product_discription: `Turkey ham, tomatoes, bread, lettuce, cheese, ketchup, mayonnaise.`,
        },
        {
          product_img: '../../../../assets/images/products/QuaileggToast.webp',
          product_title: "Quail egg toast",
          product_price: 120,
          product_id: 12,
          product_category: 'food',
          product_discription: `Quail egg, bell pepper, avocado sauce`,
        }
      ] 
      
    public products_alco: ProductsList[] = [
        {
          product_img: '../../../../assets/images/products/classicOldFashioned.webp',
          product_title: "Classic Old Fashioned",
          product_price: 300,
          product_id: 1,
          product_category: 'alco',
          product_discription: `Classic old fashioned is a classic whiskey cocktail with bitters, simple syrup, and fruit`,
        },
        {
          product_img: '../../../../assets/images/products/negroni.webp',
          product_title: "Negroni",
          product_price: 270,
          product_id: 2,
          product_category: 'alco',
          product_discription: `Negroni is a classic Italian cocktail known for its bold, bitter, and slightly sweet flavor profile.`,
        },
        {
          product_img: '../../../../assets/images/products/margarita.webp',
          product_title: "Margarita",
          product_price: 230,
          product_id: 3,
          product_category: 'alco',
          product_discription: `Margarita is a classic and refreshing cocktail made with tequila, 
                                lime juice, and orange liqueur, often served with a salted rim`,
        },
        {
          product_img: '../../../../assets/images/products/bloodyMary.webp',
          product_title: "Bloody Mary",
          product_price: 220,
          product_id: 4,
          product_category: 'alco',
          product_discription: `Bloody Mary is a savory cocktail made with vodka, tomato juice, 
                                lemon juice, Worcestershire sauce, hot sauce, and spices`,
        },
        {
          product_img: '../../../../assets/images/products/longIslandIcedTea.webp',
          product_title: "Long Island Iced Tea",
          product_price: 350,
          product_id: 5,
          product_category: 'alco',
          product_discription: `The Long Island iced tea is  Vodka, rum, gin, tequila, triple sec — all mingling in the same cocktail glass, 
                                tempered only by a dash of sweet and sour mix and a splash of cola`,
        },
        {
          product_img: '../../../../assets/images/products/TomCollins.webp',
          product_title: "Tom Collins",
          product_price: 300,
          product_id: 6,
          product_category: 'alco',
          product_discription: `This classic summer cocktail has been popular for decades, and this version calls for just two ingredients. 
                                Just pour 1 part gin and 2 parts soda into a rocks-filled highball glass.`,
        },
        {
          product_img: '../../../../assets/images/products/GrapefruitKombuchaMargarita.webp',
          product_title: "Grapefruit Kombucha Margarita",
          product_price: 270,
          product_id: 7,
          product_category: 'alco',
          product_discription: `This drink recipe starts with the classic elements of a margarita—tequila and lime 
                                juice—in a cocktail shaker but adds a splash of grapefruit juice and simple syrup`,
        },
        {
          product_img: '../../../../assets/images/products/PartidaPassionFruitCocktail.webp',
          product_title: "Partida Passion Fruit Cocktail",
          product_price: 230,
          product_id: 8,
          product_category: 'alco',
          product_discription: `Tequila fuels this citrusy sweet-tart recipe from Partida Tequila that features grapefruit, lime, and passion fruit. 
                                For added refreshment and more fruity flavor, slip in some sliced apples and berries.`,
        },
        {
          product_img: '../../../../assets/images/products/GrapefruitThymeCocktail.webp',
          product_title: "Grapefruit Thyme Cocktail",
          product_price: 220,
          product_id: 9,
          product_category: 'alco',
          product_discription: `Freshen up this cocktail of gin, grapefruit juice, and seltzer with an extra punch of herbs from your garden.`,
        },
        {
          product_img: '../../../../assets/images/products/CucumberSpritzer.webp',
          product_title: "Cucumber Spritzer",
          product_price: 350,
          product_id: 10,
          product_category: 'alco',
          product_discription: `This cocktail is out to prove that vegetables can be refreshing, too. 
                                It combines a mint simple syrup with cucumber, 
                                lime juice, club soda, and gin for a healthy-ish cocktail poured over ice.`,
        },
        {
          product_img: '../../../../assets/images/products/ColdBrewSlushies.webp',
          product_title: "Cold Brew Slushies",
          product_price: 220,
          product_id: 11,
          product_category: 'alco',
          product_discription: `Coffee fans rejoice! This cold drink can cool you off on a hot day, too. The secret to getting 
                                this Irish cream- and vodka-spiked rendition to go down like a frothy milkshake is in the ice cubes.`,
        },
        {
          product_img: '../../../../assets/images/products/Paloma.webp',
          product_title: "Paloma",
          product_price: 350,
          product_id: 12,
          product_category: 'alco',
          product_discription: `The Paloma contains simple syrup made from grapefruit juice, a little less tequila 
                                than a regular Margarita, a little more grapefruit juice, and club soda.`,
        }
      ]
      
    public products_coffeeBean: ProductsList[] = [
        {
          product_img: '../../../../assets/images/products/espressoBlend.jpg',
          product_title: "Espresso Blend",
          product_price: 1000,
          product_id: 1,
          product_category: 'coffeeBean',
          product_discription: `Espresso Blend is a carefully crafted mix of different coffee beans 
                                designed to create a balanced, rich, and flavorful espresso`,
          
        },
        {
          product_img: '../../../../assets/images/products/colombia.jpg',
          product_title: "Colombia",
          product_price: 900,
          product_id: 2,
          product_category: 'coffeeBean',
          product_discription: `Colombian coffee is globally renowned for its smooth, well-balanced flavor with bright acidity and a hint of sweetness. 
                                Grown in the high-altitude regions of Colombia, it is typically 100% Arabica, known for its mild yet rich taste`,
        },
        {
          product_img: '../../../../assets/images/products/burundi.jpg',
          product_title: "Burundi",
          product_price: 1300,
          product_id: 3,
          product_category: 'coffeeBean',
          product_discription: `Burundi coffee is known for its bright acidity, fruity sweetness, and complex flavor profile. 
                                Grown in the high-altitude regions of Burundi, this 100% Arabica coffee, often of the Bourbon variety, 
                                offers a vibrant and clean cup with delicate floral and citrus notes.`,
        },
        {
          product_img: '../../../../assets/images/products/honduras.jpg',
          product_title: "Honduras",
          product_price: 1200,
          product_id: 4,
          product_category: 'coffeeBean',
          product_discription: `Honduran coffee is known for its sweet, smooth, and well-balanced flavor, often featuring chocolate, 
                                caramel, and fruity notes. As one of the largest coffee producers in Central America, 
                                Honduras grows 100% Arabica coffee at high altitudes, resulting in a rich and flavorful cup.`,
        },
        {
          product_img: '../../../../assets/images/products/peru.jpg',
          product_title: "Peru",
          product_price: 1500,
          product_id: 5,
          product_category: 'coffeeBean',
          product_discription: `Peruvian coffee is known for its smooth, mild flavor with a balanced acidity and subtle sweetness. 
                                Grown in the high-altitude regions of the Andes, 100% Arabica beans from Peru often feature delicate floral, 
                                nutty, and chocolatey notes.`,
        },
        {
          product_img: '../../../../assets/images/products/SumatraSingleOrigin.webp',
          product_title: "Sumatra Single Origin",
          product_price: 1000,
          product_id: 6,
          product_category: 'coffeeBean',
          product_discription: `From the highlands of Indonesia, try Sumatra medium roast single origin whole bean  
                                coffee from The Coffee Bean & Tea Leaf for a sweet malty 
                                flavor with cedar aroma and a full-bodied finish.`,
          
        },
        {
          product_img: '../../../../assets/images/products/MochaJavaCoffee.webp',
          product_title: "Mocha Java Coffee",
          product_price: 900,
          product_id: 7,
          product_category: 'coffeeBean',
          product_discription: `Mocha Java is the world’s original coffee blend. Our interpretation from The 
                                Coffee Bean & Tea Leaf combines sweet, fruity Ethiopian Yirgacheffe 
                                with the deep body and rich flavor of Indonesia's Java Estate coffees.`,
        },
        {
          product_img: '../../../../assets/images/products/FrenchRoastCoffee.webp',
          product_title: "French Roast Coffee",
          product_price: 1300,
          product_id: 8,
          product_category: 'coffeeBean',
          product_discription: `French Roast is the darkest roast on the planet. We begin with a quintessential 
                                Costa Rican coffee that can stand up to the heat and intensity of a French Roast.`,
        },
        {
          product_img: '../../../../assets/images/products/TanzaniaPeaberra.webp',
          product_title: "Tanzania Peaberra",
          product_price: 1200,
          product_id: 9,
          product_category: 'coffeeBean',
          product_discription: `Originating in Northern Tanzania, Africa, this dark roasted single-bean Peaberry coffee offers a 
                                floral aroma of jasmine, a medium-bodied flavor with a hint of blackcurrant and a chocolatey finish.`,
        },
        {
          product_img: '../../../../assets/images/products/VienneseCoffee.webp',
          product_title: "Viennese Coffee",
          product_price: 1500,
          product_id: 10,
          product_category: 'coffeeBean',
          product_discription: `Vienna-style roasting creates a deep brown, medium dark roast that toasts the beans to perfection. 
                                Our Viennese Blend combines select coffees from Costa Rica and Brazil for a cup of satisfying balance and depth.`,
        },
        {
          product_img: '../../../../assets/images/products/Sumatra.webp',
          product_title: "Sumatra Coffee",
          product_price: 1200,
          product_id: 11,
          product_category: 'coffeeBean',
          product_discription: `From the highlands of Indonesia, try Sumatra medium roast single origin whole bean  coffee from 
                                The Coffee Bean & Tea Leaf for a sweet malty flavor with cedar aroma and a full-bodied finish.`,
        },
        {
          product_img: '../../../../assets/images/products/KenyaCoffee.webp',
          product_title: "Kenya Coffee",
          product_price: 1500,
          product_id: 12,
          product_category: 'coffeeBean',
          product_discription: `This Kenya AA single origin medium roast is an exquisite coffee with an assertive, lively personality. 
                                Directly sourced and expertly roasted in small batches for optimal taste and quality.`,
        }
      ]

    public menuList : MenuList[] = [
          {title: 'Coffee List', imgSrc: '../../../../assets/images/home/coffe-list.png', url: 'coffee', category: this.products_coffee },
          {title: 'Sweets', imgSrc: '../../../../assets/images/home/sweets.jpg', url: 'sweets', category: this.products_sweets},
          {title: 'Cold Drinks', imgSrc: '../../../../assets/images/home/cold-drinks.jpg', url: 'coldDrinks', category: this.products_coldDrinks},
          {title: 'Food', imgSrc: '../../../../assets/images/home/food.avif', url: 'food', category: this.products_food},
          {title: 'Alco Cocktail', imgSrc: '../../../../assets/images/home/alco.jpg', url: 'alco', category: this.products_alco},
          {title: 'Coffee Bean', imgSrc: '../../../../assets/images/home/coffee-bean.webp', url: 'coffeeBean', category: this.products_coffeeBean}
      ]

  constructor() { }

}