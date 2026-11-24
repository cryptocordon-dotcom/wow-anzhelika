/* =========================================================
   VELVET & CRUST — КАТАЛОГ РАБОТ
   Фото: Google Фото Анжелики (17.11.2026), веб-копии в img/catalog/cNNN.jpg
   Строка каталога: id | тип | теги | название | цифра на торте | декор (что видно на фото) | рекомендуемая начинка | слова для поиска
   Типы и цены: см. CAT_PRICE ниже.
   ========================================================= */
const CAT_RAW = `
c001|number|kid girl bday berries|t_num_berry|2|k_berries,k_macarons,k_meringue|fl_napoleon|
c003|cake|woman mom bday flowers|t_honey_jasmine||k_flowers,k_coconut,k_pearls|fl_honey|медовик жасмин
c005|jelly|kid woman bday|t_jelly_sea||k_kiwi,k_shells,k_jelly|fl_jelly|море ракушки
c006|jelly|woman mom bday berries|t_jelly_fruit||k_citrus,k_strawberries,k_jelly|fl_jelly|фрукты
c007|jelly|woman friends bday|t_jelly_fruit||k_fruits,k_citrus,k_jelly|fl_jelly|фрукты
c008|island|man kid bday|t_island_forest||k_moss,k_lagoon,k_rocks|fl_island|остров лес
c010|number|woman bday berries|t_num_berry|36|k_berries,k_currant,k_hearts|fl_napoleon|
c011|number|teen love bday darkgold berries|t_num_berry|18|k_blackberries,k_macarons,k_gold_spheres|fl_napoleon|
c012|number|baby boy first|t_num_meringue|1|k_meringue,k_blueberries,k_cream_roses|fl_napoleon|годик
c013|number|girl kid bday|t_num_meringue|2|k_meringue,k_crown,k_name|fl_napoleon|корона
c014|number|woman bday flowers berries|t_num_flowers|2|k_roses,k_raspberries,k_meringue|fl_napoleon|
c015|number|boy kid bday|t_num_choc|8|k_cream_roses,k_oreo,k_spheres|fl_napoleon|футбол мяч
c016|number|man bday|t_num_choc|28|k_oreo,k_choc_letters,k_choc_bars|fl_napoleon|
c017|number|woman bday flowers|t_num_flowers|34|k_cream_roses,k_flowers,k_choc_letters|fl_napoleon|
c018|number|woman teen bday flowers|t_num_flowers|20|k_cream_roses,k_flowers,k_sprinkles|fl_napoleon|
c019|number|girl kid bday berries desserts|t_num_berry|1|k_strawberries,k_macarons,k_cupcakes|fl_napoleon|годик
c020|island|man kid bday|t_island||k_moss,k_rocks,k_jelly_sea|fl_island|остров море
c021|island|man woman bday|t_island||k_moss,k_waves,k_jelly_sea|fl_island|остров море
c022|jelly|kid bday berries|t_jelly_sea||k_kiwi,k_blueberries,k_shells|fl_jelly|море
c024|island|boy kid bday|t_island|7|k_moss,k_jelly_sea,k_name|fl_island|остров
c025|island|man bday|t_island||k_moss,k_waves,k_rocks|fl_island|остров два острова
c026|number|woman bday darkgold|t_num_choc|50|k_cream_roses,k_gold_spheres,k_blueberries|fl_napoleon|юбилей
c027|island|man bday|t_island_forest||k_moss,k_lagoon,k_waves|fl_island|остров
c028|jelly|woman bday|t_jelly_fruit||k_fruits,k_citrus,k_jelly|fl_jelly|
c029|jelly|mom bday berries|t_jelly_fruit||k_currant,k_citrus,k_jelly|fl_jelly|
c030|jelly|kid bday|t_jelly_fruit||k_kiwi,k_citrus,k_jelly|fl_jelly|
c031|bento|woman friends bday berries|t_mini_set||k_fruits,k_choc_bars,k_bow|fl_berry|мини тортики
c032|bento|woman friends bday|t_mini_set||k_citrus,k_berries,k_bow|fl_mango|мини тортики
c033|cake|woman love bday|t_heart_vintage||k_vintage,k_inscription,k_cream_roses|fl_redvelvet|сердце винтаж
c034|cake|man woman bday darkgold berries|t_black_berries||k_raspberries,k_gold_leaf,k_greens|fl_cherry_choc|
c035|cake|woman bday berries|t_white_rasp||k_raspberries,k_color_drip,k_greens|fl_vanilla_straw|
c036|cake|man love bday berries|t_choc_drip_berries||k_choc_drip,k_berries,k_inscription|fl_cherry_choc|любимому
c037|cake|woman bday berries|t_white_gold|30|k_number,k_berries,k_gold_spheres|fl_pistachio|
c038|cake|man bday darkgold|t_black_gold|30|k_gold_spheres,k_choc_sails,k_choc_letters|fl_caramel|куму
c039|cake|teen boy bday|t_drip_sweets|15|k_choc_drip,k_choc_bars,k_meringue|fl_choc_nut|
c040|cake|man bday darkgold berries|t_black_gold|26|k_number,k_gold_spheres,k_blueberries|fl_caramel|
c041|cake|baby girl first|t_bunny|1|k_gingerbread,k_meringue,k_color_drip|fl_vanilla_straw|годик зайка
c042|cake|teen bday darkgold|t_black_gold|17|k_gold_spheres,k_blueberries,k_number|fl_choc_nut|
c043|cake|girl kid bday|t_meringue_cloud|7|k_meringue,k_lollipops,k_color_drip|fl_berry|
c044|cake|love anniv darkgold berries|t_black_berries||k_blackberries,k_gold_leaf,k_inscription|fl_cherry_choc|годовщина 8 лет вместе
c045|cake|boy teen bday|t_drip_sweets|11|k_oreo,k_choc_bars,k_choc_drip|fl_choc_nut|
c046|cake|girl kid bday|t_butterflies|10|k_lollipops,k_butterflies,k_meringue|fl_vanilla_straw|
c047|cake|woman bday flowers|t_silhouette|30|k_silhouette,k_flowers,k_number|fl_pistachio|
c048|cake|love anniv humor darkgold|t_quote||k_gold_spheres,k_inscription|fl_caramel|любить и пилить
c049|cake|woman bday berries|t_berry_wreath||k_raspberries,k_color_drip,k_roses|fl_vanilla_straw|
c050|cake|teen kid bday chars|t_wizard||k_print,k_gold_spheres,k_toy|fl_choc_nut|гарри поттер harry potter волшебник
c051|number|boy kid bday|t_num_name|4|k_cream_roses,k_oreo,k_name|fl_napoleon|
c052|cake|girl kid bday chars|t_minnie||k_meringue,k_print,k_hearts|fl_berry|минни маус minnie mouse мышка
c053|cake|woman bday flowers|t_flowers_white||k_roses,k_gold_leaf,k_topper|fl_pistachio|
c055|cake|woman man bday|t_happy_spheres||k_spheres,k_marble,k_topper|fl_lemon|
c056|cake|man bday berries|t_navy_velvet||k_velour,k_blackberries,k_topper|fl_cherry_choc|синий
c057|wedding|love wedding|t_wedding_mono||k_topper,k_flowers,k_greens|fl_vanilla_straw|свадьба монограмма
c058|cake|baby boy first bears|t_baby_metrics||k_bear,k_metrics,k_spheres|fl_vanilla_straw|выписка рождение
c059|cake|grand bday|t_grandpa|68|k_print,k_butterflies,k_inscription|fl_honey|дедушка
c060|cake|boy kid bday|t_space||k_print,k_stars,k_spheres|fl_choc_nut|космос космонавт ракета
c062|cake|boy kid bday games chars|t_pixel|4|k_print,k_color_drip,k_moss|fl_choc_nut|майнкрафт minecraft
c063|cake|woman bday flowers|t_isomalt||k_isomalt,k_roses,k_topper|fl_lemon|
c064|cake|baby christ bears|t_baby_gentle||k_bear,k_gold_spheres,k_pearls|fl_vanilla_straw|крестины
c065|cake|girl teen bday chars|t_witch|9|k_print,k_ombre,k_name|fl_cherry_choc|уэнсдей wednesday аддамс
c066|cake|woman mom bday flowers|t_peonies||k_peonies,k_candles,k_cream|fl_berry|пионы
c069|cake|man friends bday berries|t_friend||k_strawberries,k_cherries,k_inscription|fl_vanilla_straw|бро другу
c070|bento|woman friends bday desserts|t_bento_set||k_inscription,k_cupcakes,k_pearls|fl_berry|бенто капкейки
c071|cake|woman bday berries|t_strawberry||k_strawberries,k_cream,k_jelly|fl_vanilla_straw|клубника
c072|desserts|woman friends bday berries|t_cupcakes||k_strawberries,k_cream_roses|fl_vanilla_straw|капкейки клубника
c073|cake|woman bday berries|t_strawberry||k_strawberries,k_greens,k_topper|fl_vanilla_straw|клубника
c075|cake|baby girl first|t_doll|1|k_gingerbread,k_toy,k_sprinkles|fl_vanilla_straw|кукла пончики годик
c076|cake|kid boy bday bears|t_bears|3|k_bear,k_stars,k_toy|fl_choc_nut|кубики
c077|cake|teen girl bday|t_teen_portrait|16|k_print,k_butterflies,k_topper|fl_berry|
c078|cake|woman mom bday berries|t_strawberry||k_strawberries,k_choc_drip,k_inscription|fl_vanilla_straw|
c079|bento2|friends humor bday|t_bento_duo||k_drawing,k_inscription|fl_redvelvet|пара ёжик винтаж
c080|bento|man friends humor bday desserts|t_bento_set|30|k_inscription,k_cupcakes,k_oreo|fl_choc_nut|бенто капкейки
c081|cake|woman mom bday flowers|t_peach_roses||k_roses,k_gold_spheres,k_greens|fl_pistachio|
c082|cake|mom bday berries|t_pomegranate||k_pomegranate,k_choc_drip,k_inscription|fl_cherry_choc|маме
c083|cake|teen woman bday|t_cosmetics||k_figure,k_meringue,k_spheres|fl_berry|косметика бьюти помада
c084|cake|teen girl bday|t_dreams|10|k_topper,k_silver_spheres,k_inscription|fl_vanilla_straw|мечты
c085|bento|mom bday humor|t_bento||k_figure,k_inscription|fl_berry|маме пуговицы
c086|bento|love friends bday|t_bento||k_hearts,k_inscription|fl_redvelvet|
c087|cake|girl kid bday tiers|t_unicorn|5|k_unicorn,k_rainbow,k_meringue|fl_vanilla_straw|единорог
c088|cake|kid bday chars tiers|t_cartoon||k_print,k_spheres|fl_vanilla_straw|лунтик мультик
c089|cake|baby kid bday bears|t_bears||k_bear,k_gold_spheres,k_topper|fl_vanilla_straw|
c090|cake|baby girl first tiers|t_two_tier|1|k_spheres,k_clouds,k_name|fl_berry|годик
c091|cake|woman man bday|t_sphere||k_sphere_shape,k_sparkler,k_topper|fl_peanut|бомба шар
c092|cake|kid boy bday bears|t_bears|2|k_bear,k_gold_spheres,k_name|fl_choc_nut|
c093|cake|baby boy first bears|t_half_year||k_bear,k_silver_spheres,k_inscription|fl_vanilla_straw|полгода пів рочку
c094|cake|woman girl bday|t_sphere||k_velour,k_sphere_shape,k_topper|fl_berry|шар
c095|cake|woman girl bday|t_butterflies||k_butterflies,k_pearls,k_cream|fl_lemon|
c096|cake|baby girl first desserts|t_rainbow|1|k_rainbow,k_clouds,k_cake_pops|fl_vanilla_straw|радуга one кейк-попсы
c097|bento|woman bday|t_bento||k_cream,k_inscription|fl_berry|
c098|cake|woman bday flowers|t_lavender||k_lavender,k_butterflies,k_sprinkles|fl_lemon|лаванда
c099|cake|teen bday darkgold humor|t_black_gold|18|k_gold_spheres,k_inscription|fl_caramel|совершеннолетие
c100|bento|man humor desserts|t_bento_set|40|k_inscription,k_bills,k_cupcakes|fl_choc_nut|юбилей
c101|bento|love woman bday desserts|t_bento_set||k_hearts,k_cupcakes,k_sprinkles|fl_redvelvet|
c102|cake|woman man bday tiers|t_two_tier||k_gold_spheres,k_pomegranate,k_cream|fl_pistachio|
c103|cake|woman bday|t_choc_flower||k_choc_flower,k_color_drip,k_greens|fl_lemon|
c104|cake|teen bday|t_money|18|k_bills,k_toy|fl_choc_nut|деньги доллары
c105|cake|woman bday flowers|t_flowers_white||k_roses,k_flowers,k_cream|fl_lemon|
c106|cake|boy kid bday games chars|t_pixel|7|k_print,k_oreo,k_lollipops|fl_choc_nut|майнкрафт minecraft
c107|cake|boy kid bday|t_nautical||k_ship,k_isomalt,k_waves|fl_vanilla_straw|корабль маяк море
c108|cake|man bday|t_profession||k_print,k_gold_spheres,k_kiwi|fl_caramel|профессия врач
c109|wedding|love wedding tiers flowers|t_wedding_tiers||k_roses,k_silver_spheres,k_cream|fl_vanilla_straw|свадьба
c110|cake|girl kid bday|t_happy_spheres||k_spheres,k_flowers,k_print|fl_berry|
c111|cake|baby boy first bears tiers|t_bears|1|k_bear,k_spheres,k_metrics|fl_vanilla_straw|годик
c112|cake|woman bday flowers|t_flowers_bright||k_flowers,k_cream|fl_berry|альстромерии
c113|cake|bday berries|t_berry_wreath||k_berries,k_blackberries,k_cream|fl_berry|
c114|cake|mom bday|t_mom||k_spheres,k_topper,k_berries|fl_berry|маме
c115|wedding|woman wedding flowers|t_flowers_white||k_roses,k_pearls,k_flowers|fl_vanilla_straw|
c116|desserts|woman friends berries|t_trifle||k_raspberries,k_cupcakes,k_cream|fl_vanilla_straw|трайфлы стаканчики
c117|cake|man bday|t_drip_sweets|40|k_choc_bars,k_choc_drip,k_berries|fl_choc_nut|юбилей
c118|cake|woman bday flowers berries|t_flowers_bright|31|k_flowers,k_raspberries,k_number|fl_berry|
c119|desserts|friends humor|t_cupcakes||k_print,k_cupcakes|fl_choc_nut|капкейки приколы
c120|cake|woman bday flowers|t_minimal||k_roses,k_pearls|fl_lemon|
c121|bento|kid bday desserts|t_bento_set||k_cream,k_cupcakes,k_citrus|fl_mango|бенто капкейки
c122|wedding|love wedding tiers flowers|t_wedding_tiers||k_roses,k_gold_spheres,k_cream|fl_vanilla_straw|свадьба трёхъярусный
c123|cake|boy kid bday games chars|t_battle|8|k_print,k_spheres,k_name|fl_choc_nut|фортнайт fortnite
c124|cake|teen girl bday|t_teen_portrait||k_print,k_butterflies,k_macarons|fl_berry|
c125|bento2|woman bday berries|t_bento_duo||k_berries,k_lavender,k_inscription|fl_berry|пара
c126|desserts|bday berries|t_cupcakes||k_strawberries,k_blueberries,k_cream|fl_choc_nut|капкейки
c127|cake|bday berries|t_strawberry||k_strawberries,k_choc_bars,k_cream|fl_cherry_choc|шоколадный
c128|desserts|dad man berries|t_cupcakes||k_cherries,k_topper,k_cream|fl_caramel|капкейки папе мужу
c129|cake|baby boy first bears|t_baby_metrics||k_bear,k_silver_spheres,k_stars|fl_vanilla_straw|
c130|cake|bday darkgold berries|t_black_gold|30|k_strawberries,k_gold_spheres,k_inscription|fl_cherry_choc|
c131|cake|mom bday berries|t_mom||k_cherries,k_choc_sails,k_topper|fl_cherry_choc|маме
c132|wedding|love wedding tiers flowers|t_wedding_tiers||k_flowers,k_pearls,k_greens|fl_vanilla_straw|свадьба
c133|cake|mom grand bday flowers berries|t_mom||k_strawberries,k_flowers,k_inscription|fl_vanilla_straw|самой родной
c134|cake|girl kid bday|t_teen_portrait|8|k_print,k_meringue,k_name|fl_berry|
c135|cake|mom bday|t_mom||k_choc_flower,k_macarons,k_marble|fl_pistachio|маме
c136|cake|man bday darkgold|t_black_gold|30|k_gold_spheres,k_pomegranate,k_number|fl_caramel|
c137|cake|baby boy first darkgold|t_black_silver|1|k_silver_spheres,k_pomegranate,k_topper|fl_choc_nut|one годик
c138|cake|bday berries|t_choc_drip_berries||k_choc_drip,k_pomegranate,k_blackberries|fl_cherry_choc|
c139|cake|girl kid bday|t_teen_portrait|10|k_print,k_meringue,k_lollipops|fl_berry|
c140|cake|baby christ|t_christening||k_wings,k_cross,k_figure|fl_vanilla_straw|крестины крещение ангел
c141|bento|bday|t_bento||k_flowers,k_inscription|fl_berry|
c142|cake|baby boy first bears|t_baby_metrics|1|k_print,k_stars,k_metrics|fl_vanilla_straw|годик
c143|cake|woman bday|t_pomegranate||k_pomegranate,k_greens|fl_cherry_choc|
c144|cake|baby boy first bears|t_bears|1|k_bear,k_clouds,k_spheres|fl_vanilla_straw|годик
c145|cake|baby boy first bears|t_half_year||k_bear,k_clouds,k_stars|fl_vanilla_straw|полгода пів рочку
c146|cake|woman bday|t_choc_flower||k_choc_flower,k_pomegranate,k_gold_leaf|fl_lemon|
c147|cake|kid boy bday bears|t_bears|2|k_bear,k_spheres,k_number|fl_choc_nut|
c148|desserts|teen girl bday|t_social||k_cupcakes,k_print,k_hearts|fl_berry|тикток tiktok инстаграм instagram
c149|cake|boy kid bday|t_happy_spheres|10|k_number,k_spheres,k_inscription|fl_choc_nut|
c150|cake|woman bday flowers|t_roses_pink||k_roses,k_spheres,k_inscription|fl_berry|
c151|cake|bday berries|t_minimal||k_blueberries,k_coconut|fl_lemon|
c152|cake|girl kid bday chars|t_puppies|7|k_print,k_cookies,k_gold_spheres|fl_berry|щенячий патруль paw patrol скай
c153|desserts|bday berries|t_cheesecake||k_blueberries,k_cream|fl_cheese|чизкейк
c154|cake|teen girl bday|t_social|10|k_print,k_lollipops,k_bow|fl_berry|инстаграм instagram
c155|bento2|mom bday|t_bento_duo||k_inscription,k_hearts|fl_berry|маме пара
c156|cake|girl kid bday chars|t_cartoon|3|k_print,k_gingerbread,k_ombre|fl_berry|смешарики крош нюша
c157|cake|baby girl first|t_baby_metrics|1|k_clouds,k_flowers,k_gold_spheres|fl_vanilla_straw|годик
c158|cake|mom grand bday|t_choc_flower||k_choc_flower,k_ombre,k_inscription|fl_pistachio|
c159|cake|baby first|t_minimal||k_garland,k_greens,k_figure|fl_vanilla_straw|
c160|cake|dad bday|t_for_dad||k_inscription,k_drawing|fl_choc_nut|папе
c161|cake|girl kid bday|t_unicorn||k_unicorn,k_cream_roses|fl_vanilla_straw|единорог
c163|cake|kid bday chars|t_cartoon|7|k_print,k_lollipops,k_color_drip|fl_vanilla_straw|фиксики
c164|cake|boy kid bday games chars|t_crew|6|k_print,k_stars,k_name|fl_choc_nut|амонг ас among us
c165|cake|baby girl first|t_bunny|1|k_gingerbread,k_stars,k_toy|fl_vanilla_straw|годик зайка
c166|cake|girl kid bday|t_happy_spheres||k_spheres,k_meringue,k_name|fl_berry|
c167|cake|boy kid bday chars superhero|t_superhero|5|k_print,k_lollipops|fl_choc_nut|человек паук spiderman spider-man спайдермен
c168|cake|boy kid bday games chars|t_pixel||k_print,k_moss,k_lollipops|fl_choc_nut|майнкрафт minecraft
c169|cake|teen boy bday chars|t_social||k_print,k_color_drip,k_sprinkles|fl_choc_nut|ютуб youtube блогер а4 a4
c170|cake|mom bday|t_mom||k_choc_flower,k_cream,k_topper|fl_pistachio|лучшей маме
c171|cake|teen girl bday|t_butterflies|15|k_butterflies,k_spheres,k_number|fl_berry|
c172|cake|woman bday|t_choc_flower||k_choc_flower,k_lavender,k_greens|fl_lemon|
c173|cake|baby boy first chars|t_boss|1|k_print,k_meringue,k_inscription|fl_choc_nut|босс молокосос boss baby
c174|cake|baby girl first|t_baby_first|1|k_clouds,k_stars,k_spheres|fl_berry|годик
c175|cake|mom bday darkgold|t_mom||k_gold_spheres,k_blueberries,k_choc_letters|fl_cherry_choc|маме
c176|cake|boy kid bday winter|t_winter|8|k_figure,k_meringue,k_color_drip|fl_cherry_choc|снеговик новый год зима
c177|cake|bday berries|t_berry_wreath||k_berries,k_pearls,k_inscription|fl_berry|
c178|cake|grand woman bday|t_choc_flower|60|k_choc_flower,k_ombre,k_gold_leaf|fl_honey|бабушке юбилей
c179|cake|teen boy bday|t_black_silver|15|k_stars,k_silver_spheres,k_topper|fl_choc_nut|
c180|cake|mom bday|t_choc_flower||k_choc_flower,k_gold_leaf,k_inscription|fl_berry|маме
c181|cake|baby boy first bears|t_half_year||k_bear,k_clouds,k_silver_spheres|fl_vanilla_straw|полгода пів рочку
c182|cake|girl kid bday chars|t_minnie||k_print,k_bow,k_hearts|fl_berry|минни маус minnie
c183|cake|woman bday|t_choc_flower||k_choc_flower,k_gold_spheres,k_pearls|fl_berry|
c184|desserts|bday berries|t_mini_tarts||k_oreo,k_choc_bars,k_blueberries|fl_napoleon|мини тарты
c185|desserts|bday berries|t_mini_tarts||k_pomegranate,k_cookies,k_cream|fl_napoleon|мини тарты
c186|cake|boy kid bday chars|t_puppies|4|k_print,k_lollipops|fl_choc_nut|щенячий патруль paw patrol гонщик
c187|cake|baby boy first bears|t_baby_metrics||k_bear,k_clouds,k_stars|fl_vanilla_straw|
c188|cake|dad bday humor chars|t_dad_hero||k_print,k_choc_drip,k_inscription|fl_choc_nut|папе герой босс
c189|cake|woman bday|t_pomegranate||k_pomegranate,k_cream_roses,k_hearts|fl_cherry_choc|
c190|cake|woman bday|t_white_gold|50|k_choc_sails,k_number,k_topper|fl_berry|юбилей
c191|bento|love bday|t_bento||k_hearts,k_inscription|fl_redvelvet|
c192|cake|love man bday darkgold berries|t_black_berries||k_blueberries,k_choc_bars,k_inscription|fl_cherry_choc|любимому
c193|cake|bday berries|t_macaron_drip||k_macarons,k_pomegranate,k_color_drip|fl_pistachio|
c194|cake|bday berries|t_macaron_drip||k_macarons,k_pomegranate,k_choc_drip|fl_caramel|
c195|wedding|love anniv wedding tiers|t_wedding_tiers||k_isomalt,k_gold_spheres,k_greens|fl_vanilla_straw|годовщина
c196|cake|girl kid bday|t_social|6|k_lollipops,k_print,k_hearts|fl_berry|тикток tiktok инстаграм
c197|cake|baby boy first|t_baby_first|1|k_spheres,k_topper,k_name|fl_vanilla_straw|годик
c198|cake|man bday darkgold|t_black_gold||k_gold_spheres,k_spheres,k_inscription|fl_caramel|
c199|cake|teen girl bday|t_butterflies|13|k_butterflies,k_number,k_cream|fl_lemon|
c200|cake|baby girl first bears tiers|t_baby_metrics|1|k_bear,k_bow,k_hearts|fl_berry|годик
c201|cake|baby girl christ|t_baby_gentle||k_flowers,k_bear,k_gold_spheres|fl_vanilla_straw|крестины
c202|cake|woman friends humor darkgold|t_quote||k_choc_letters,k_blueberries,k_choc_bars|fl_cherry_choc|ведьмы не стареют
c203|cake|boy kid bday chars superhero|t_superhero|6|k_print,k_pomegranate|fl_cherry_choc|человек паук spiderman spider-man
c204|cake|woman bday flowers|t_roses_pink||k_flowers,k_pearls|fl_berry|
c205|cake|teen man bday|t_galaxy||k_galaxy,k_stars,k_inscription|fl_choc_nut|космос галактика
c206|cake|gender baby|t_gender||k_spheres,k_choc_letters|fl_vanilla_straw|гендер пати мальчик или девочка
c207|cake|man love humor darkgold|t_quote||k_choc_letters,k_gold_spheres|fl_caramel|носки
c208|bento2|friends halloween|t_halloween||k_figure,k_drawing|fl_choc_nut|хэллоуин мумия паутина пара
c209|wedding|woman wedding tiers flowers|t_wedding_tiers||k_roses,k_wheat,k_cream|fl_berry|свадьба
c210|cake|love anniv darkgold|t_black_gold|25+25|k_isomalt,k_pomegranate,k_choc_letters|fl_cherry_choc|юбилей годовщина
c211|cake|teen bday|t_white_gold|18|k_gold_spheres,k_cream|fl_lemon|совершеннолетие
c212|bento|woman bday|t_bento||k_inscription,k_hearts|fl_berry|
c213|cake|mom bday flowers|t_mom||k_flowers,k_gold_leaf,k_inscription|fl_berry|маме
c214|cake|baby girl first bears|t_bears|1|k_bear,k_butterflies,k_spheres|fl_berry|годик
c215|cake|man dad bday darkgold|t_tie||k_tie,k_bills,k_gold_spheres|fl_caramel|галстук босс деньги
c216|cake|friends man humor|t_quote||k_print,k_choc_drip,k_choc_letters|fl_choc_nut|
c217|cake|boy kid bday games chars|t_battle|6|k_print,k_spheres,k_name|fl_choc_nut|фортнайт fortnite
c218|cake|girl woman bday|t_butterflies||k_butterflies,k_pearls,k_cream|fl_berry|
c219|cake|baby boy first bears|t_bears||k_bear,k_stars,k_spheres|fl_vanilla_straw|
c220|cake|woman bday flowers|t_flowers_bright||k_flowers,k_gold_leaf|fl_lemon|
c221|cake|woman love bday|t_isomalt||k_isomalt,k_gold_spheres,k_greens|fl_lemon|
c222|cake|woman bday flowers|t_peach_roses||k_roses,k_pearls|fl_berry|
c223|cake|dad bday humor|t_dad_hero||k_topper,k_silver_spheres,k_inscription|fl_choc_nut|папе герой
c224|cake|kid boy bday|t_tractor|2|k_toy,k_spheres,k_name|fl_vanilla_straw|трактор машинка
c225|cake|girl kid bday chars|t_ladybug||k_print,k_meringue|fl_berry|леди баг ladybug
c226|cake|mom bday|t_mom||k_spheres,k_topper,k_color_drip|fl_berry|маме
c227|cake|boy kid bday games chars|t_pixel|6|k_print,k_lollipops,k_choc_drip|fl_choc_nut|майнкрафт minecraft
c228|cake|girl kid bday|t_cat||k_cat_face,k_stars,k_cream_roses|fl_vanilla_straw|котик кошка
c229|cake|woman bday flowers|t_roses_pink||k_roses,k_macarons,k_gold_leaf|fl_berry|
c230|cake|bday berries|t_berry_wreath||k_berries,k_pearls,k_raspberries|fl_berry|
c231|cake|girl kid bday|t_butterflies|10|k_butterflies,k_spheres,k_number|fl_berry|
c232|cake|boy kid bday|t_football|11|k_spheres,k_print,k_moss|fl_choc_nut|футбол мяч
c233|cake|dad bday|t_drip_sweets||k_oreo,k_macarons,k_choc_drip|fl_choc_nut|папе татусю
c234|cake|woman bday flowers|t_flowers_white||k_roses,k_flowers,k_topper|fl_pistachio|
c235|cake|baby boy first chars|t_boss|1|k_print,k_bills,k_lollipops|fl_choc_nut|босс молокосос boss baby
c236|cake|baby christ|t_christening||k_wings,k_cross,k_figure|fl_vanilla_straw|крестины крещение ангел
c237|cake|woman bday|t_silhouette||k_silhouette,k_cream_roses|fl_mango|
c238|cake|baby christ|t_christening||k_bear,k_feathers,k_stars|fl_vanilla_straw|крестины крещение
c239|cake|kid teen bday|t_drip_sweets||k_citrus,k_oreo,k_color_drip|fl_mango|
c240|cake|teen bday|t_drip_sweets|19|k_choc_drip,k_choc_bars,k_number|fl_choc_nut|
c241|cake|woman bday flowers|t_flowers_bright||k_flowers,k_vintage|fl_berry|
c242|cake|grand bday humor|t_grandma|80|k_gingerbread,k_meringue,k_ombre|fl_honey|бабушке юбилей
c243|wedding|love anniv wedding|t_isomalt||k_isomalt,k_gold_spheres,k_greens|fl_vanilla_straw|годовщина сердца
c244|cake|baby boy first bears|t_bears|1|k_bear,k_stars,k_inscription|fl_vanilla_straw|годик
c245|cake|kid boy bday|t_tractor||k_toy,k_candies,k_choc_drip|fl_choc_nut|трактор
c246|cake|woman bday flowers|t_flowers_bright||k_flowers,k_pearls|fl_mango|
c247|cake|woman bday darkgold berries|t_black_berries||k_berries,k_gold_leaf,k_inscription|fl_cherry_choc|
c248|cake|mom bday flowers|t_mom||k_flowers,k_color_drip,k_inscription|fl_lemon|маме
c249|cake|man bday|t_fishing|40|k_fish,k_number,k_greens|fl_caramel|рыбалка рыбак щука
c250|cake|love man bday darkgold|t_black_gold||k_gold_spheres,k_blueberries,k_inscription|fl_caramel|любимому
c251|cake|boy kid bday games chars|t_pixel|7|k_print,k_lollipops,k_moss|fl_choc_nut|майнкрафт minecraft
c252|cake|mom bday flowers|t_mom||k_flowers,k_gold_leaf,k_inscription|fl_berry|маме
c253|cake|boy kid bday|t_car|10|k_print,k_oreo,k_blueberries|fl_choc_nut|машина автомобиль bmw бмв
c254|cake|woman bday flowers|t_flowers_bright||k_flowers,k_drawing|fl_berry|
c255|cake|man bday|t_fishing|45|k_print,k_fish,k_moss|fl_caramel|рыбалка рыбак
c256|cake|mom bday flowers|t_mom||k_roses,k_gold_spheres,k_inscription|fl_berry|маме
c257|cake|bday berries|t_berry_wreath||k_raspberries,k_greens,k_cream|fl_berry|
c258|cake|woman bday flowers|t_roses_pink||k_roses,k_spheres,k_ombre|fl_berry|
c259|cake|girl kid bday chars|t_cat|2|k_gingerbread,k_meringue,k_berries|fl_berry|кошечка мари
c260|cake|bday berries|t_choc_drip_berries|30|k_berries,k_choc_drip,k_number|fl_cherry_choc|
`;

/* Цены (евро): прайс Анжелики */
const CAT_PRICE = {
  cake:{kg:40}, number:{kg:40}, jelly:{kg:40}, island:{kg:50,from:1}, wedding:{kg:45,from:1},
  bento:{fix:30}, bento2:{pair:50}, desserts:{set:18,from:1,noPromo:1}, mousse:{fix:30}   /* десерты: 18 € за 6 шт., на них скидка не действует */
};

/* Начинки: 3 фирменные (описания Анжелики) + варианты по их примеру. photo — фото разреза, если есть */
const FLAVORS = [
  {id:"fl_berry",photo:"img/menu/fresh-berry.jpg",c:"#6b4c8a",sig:1},
  {id:"fl_mcflurry",photo:"img/menu/makfluri.jpg",c:"#d4687c",sig:1},
  {id:"fl_peanut",photo:"img/menu/arahisovyi-latte.jpg",c:"#a0784f",sig:1},
  {id:"fl_island",photo:"img/catalog/c009.jpg",c:"#3d2a1e"},
  {id:"fl_honey",photo:"img/catalog/c004.jpg",c:"#d9a441"},
  {id:"fl_napoleon",photo:"img/catalog/c002.jpg",c:"#e7c48a"},
  {id:"fl_lemon",photo:"img/catalog/c061.jpg",c:"#f2d14b"},
  {id:"fl_vanilla_straw",photo:"img/catalog/c054.jpg",c:"#e8566b"},
  {id:"fl_cherry_choc",c:"#7a1328"},
  {id:"fl_caramel",c:"#c27a2c"},
  {id:"fl_pistachio",c:"#8fae5a"},
  {id:"fl_mango",c:"#f2a12e"},
  {id:"fl_redvelvet",c:"#b3243d"},
  {id:"fl_choc_nut",c:"#5a3a26"},
  {id:"fl_jelly",photo:"img/catalog/c006.jpg",c:"#f08a3c"},
  {id:"fl_cheese",photo:"img/catalog/c153.jpg",c:"#e9d7a6"}
];

/* Быстрый поиск: «Для кого» и «Повод и стиль» (фильтры сочетаются) */
const CAT_WHO = {
  q_all:()=>true, q_kids:p=>p.has("kid","girl","boy","baby"), q_girl:p=>p.has("girl"), q_boy:p=>p.has("boy"),
  q_baby:p=>p.has("baby"), q_teen:p=>p.has("teen"), q_mom:p=>p.has("mom","woman"), q_dad:p=>p.has("dad","man"),
  q_love:p=>p.has("love"), q_grand:p=>p.has("grand"), q_friends:p=>p.has("friends")
};
const CAT_STYLE = {
  q_any:()=>true, q_island:p=>p.type==="island", q_christ:p=>p.has("christ","gender"), q_wedding:p=>p.has("wedding","anniv"),
  q_chars:p=>p.has("chars","superhero","games"), q_number:p=>p.type==="number", q_bento:p=>p.type==="bento"||p.type==="bento2",
  q_desserts:p=>p.type==="desserts"||p.type==="mousse", q_jelly:p=>p.type==="jelly", q_flowers:p=>p.has("flowers"),
  q_berries:p=>p.has("berries"), q_darkgold:p=>p.has("darkgold"), q_humor:p=>p.has("humor"), q_bears:p=>p.has("bears"), q_winter:p=>p.has("winter")
};

/* ---------- Тексты каталога на 6 языках ---------- */
const CAT_I18N = {
ru:{
 cat_eyebrow:"Каталог работ · 250+ тортов",cat_title:"Найдите свой торт",cat_sub:"Реальные работы Анжелики. Выберите, для кого торт и какой он, или впишите слово — «остров», «мама», «Человек-паук», «18».",
 cat_search_ph:"Поиск: остров, крестины, мишка, 30…",cat_who:"Для кого",cat_style:"Повод и стиль",cat_found:"Найдено: {n}",cat_more:"Показать ещё",cat_empty:"Ничего не нашлось. Попробуйте другое слово — или опишите идею Анжелике, она сделает по вашему эскизу.",cat_reset:"Сбросить фильтры",
 cat_want:"Хочу такой торт",cat_similar:"Собрать похожий в конструкторе",cat_flavor:"Рекомендуем начинку",cat_any_flavor:"Начинку можно выбрать любую — смотрите «Начинки» ниже.",cat_no:"№",cat_photo:"Фото",
 msg_want:"Здравствуйте, Анжелика! Хочу торт как в вашем каталоге:",and:"и",
 p_kg:"{p} / кг",p_from_kg:"от {p} / кг",p_pair:"{p} за пару",p_set:"от {p} за 6 шт.",
 q_all:"Всем",q_kids:"Детям",q_girl:"Девочке",q_boy:"Мальчику",q_baby:"Малышу до года",q_teen:"Подростку",q_mom:"Маме и женщинам",q_dad:"Папе и мужчинам",q_love:"Любимым",q_grand:"Бабушке и дедушке",q_friends:"Друзьям",
 q_any:"Все",q_island:"Торт-остров",q_christ:"Крестины и гендер-пати",q_wedding:"Свадьба и годовщина",q_chars:"Герои и персонажи",q_number:"Торты-цифры",q_bento:"Бенто",q_desserts:"Десерты",q_jelly:"Фрукты в желе",q_flowers:"С живыми цветами",q_berries:"С ягодами",q_darkgold:"Чёрный с золотом",q_humor:"С юмором",q_bears:"Мишки",q_winter:"Новый год",
 feat_island_t:"Торт-остров",feat_island_d:"Наш главный хит: море из желе, скалы, волны и «мох». Внутри — шоколад, карамель и орехи.",feat_christ_t:"Крестины",feat_christ_d:"Крылья ангела, крестик, нежный крем — и имя малыша.",feat_bento_t:"Бенто",feat_bento_d:"Мини-торт 400 г с надписью — подарок, который запомнят.",feat_desserts_t:"Десерты",feat_desserts_d:"Капкейки, трайфлы, мини-тарты — от 6 штук.",feat_go:"Смотреть",
 fl_eyebrow:"Начинки",fl_title:"Что внутри",fl_sub:"Любой дизайн можно собрать с любой начинкой. Три фирменные — авторские рецепты Анжелики.",fl_sig:"Фирменная",
 bake_t:"Скоро: свежая выпечка",bake_d:"Булочки, пирожки и круассаны — сладкие и солёные, с начинкой. То, чего так не хватает на побережье.",bake_btn:"Хочу попробовать первым",bake_msg:"Здравствуйте! Сообщите, пожалуйста, когда появятся булочки, пирожки и круассаны — хочу попробовать.",
 t_num_berry:"Цифра в ягодах",t_num_flowers:"Цифра в цветах",t_num_meringue:"Цифра с безе",t_num_choc:"Шоколадная цифра",t_num_name:"Цифра с именем",t_honey_jasmine:"Медовик с жасмином",t_jelly_sea:"Морской желейный",t_jelly_fruit:"Фрукты в желе",t_island:"Торт-остров",t_island_forest:"Лесной остров",t_mini_set:"Набор мини-тортиков",t_heart_vintage:"Винтажное сердце",t_black_berries:"Чёрный с ягодами",t_white_rasp:"Белый с малиной",t_choc_drip_berries:"Шоколадные подтёки и ягоды",t_white_gold:"Белое золото",t_black_gold:"Чёрное золото",t_drip_sweets:"Дрип со сладостями",t_bunny:"Зайка",t_meringue_cloud:"Облако безе",t_butterflies:"Бабочки",t_silhouette:"Леди на торте",t_quote:"Торт с цитатой",t_wizard:"Школа волшебства",t_minnie:"Мышка с бантом",t_flowers_white:"Белый с цветами",t_happy_spheres:"Шары и поздравление",t_navy_velvet:"Синий велюр",t_wedding_mono:"Свадебная монограмма",t_baby_metrics:"Метрика малыша",t_grandpa:"Для дедушки",t_grandma:"Для бабушки",t_space:"Космос",t_pixel:"Пиксельный мир",t_isomalt:"Хрустальный",t_baby_gentle:"Нежный для малыша",t_witch:"Девочка в чёрном",t_peonies:"Пионы",t_friend:"Для друга",t_bento_set:"Бенто и капкейки",t_strawberry:"Клубничный",t_cupcakes:"Капкейки",t_doll:"Кукла и пончики",t_bears:"Мишки",t_teen_portrait:"Портрет именинницы",t_bento_duo:"Пара бенто",t_peach_roses:"Персиковые розы",t_pomegranate:"Гранатовый",t_cosmetics:"Бьюти-торт",t_dreams:"Мечты сбываются",t_bento:"Бенто с надписью",t_unicorn:"Единорог",t_cartoon:"Мультяшный",t_two_tier:"Двухъярусный",t_sphere:"Торт-шар",t_half_year:"Полгодика",t_rainbow:"Радуга",t_lavender:"Лаванда",t_choc_flower:"Шоколадный цветок",t_money:"Денежный",t_nautical:"Морское путешествие",t_profession:"По профессии",t_wedding_tiers:"Свадебный ярусный",t_flowers_bright:"Яркие цветы",t_mom:"Для мамы",t_trifle:"Десерты в стаканчиках",t_battle:"Королевская битва",t_black_silver:"Чёрное серебро",t_christening:"Крестины",t_social:"Соцсети",t_minimal:"Минимализм",t_puppies:"Щенки-спасатели",t_cheesecake:"Чизкейк",t_for_dad:"Для папы",t_crew:"Космическая команда",t_superhero:"Супергерой",t_boss:"Маленький босс",t_baby_first:"Первый годик",t_winter:"Снеговик",t_berry_wreath:"Ягодный венок",t_mini_tarts:"Мини-тарты",t_dad_hero:"Папа-герой",t_macaron_drip:"Макаронс и подтёки",t_galaxy:"Галактика",t_gender:"Мальчик или девочка?",t_halloween:"Хэллоуин",t_tie:"Галстук",t_tractor:"Трактор",t_ladybug:"Божья коровка",t_cat:"Котик",t_roses_pink:"Розовые розы",t_football:"Футбол",t_car:"Автомобиль",t_fishing:"Рыбалка",
 k_berries:"свежие ягоды",k_raspberries:"малина",k_strawberries:"клубника",k_blueberries:"голубика",k_blackberries:"ежевика",k_cherries:"черешня",k_pomegranate:"зёрна граната",k_currant:"красная смородина",k_citrus:"дольки цитрусов",k_kiwi:"киви",k_fruits:"свежие фрукты",k_jelly:"прозрачное желе",k_jelly_sea:"желейное море",k_waves:"кремовые волны",k_moss:"съедобный «мох»",k_rocks:"шоколадные скалы",k_lagoon:"лагуна из желе",k_macarons:"макаронс",k_meringue:"безе",k_lollipops:"карамельные леденцы",k_cream_roses:"кремовые розы",k_flowers:"живые цветы",k_roses:"живые розы",k_peonies:"живые пионы",k_choc_flower:"цветок из шоколада",k_figure:"фигурка ручной работы",k_bear:"мишка ручной работы",k_gingerbread:"расписной пряник",k_print:"съедобная картинка",k_inscription:"надпись",k_choc_letters:"шоколадные буквы",k_number:"цифра",k_topper:"топпер",k_gold_spheres:"золотые сферы",k_silver_spheres:"серебряные сферы",k_spheres:"шоколадные шары",k_gold_leaf:"сусальное золото",k_choc_drip:"шоколадные подтёки",k_color_drip:"цветные подтёки",k_oreo:"печенье",k_choc_bars:"шоколадные батончики",k_isomalt:"прозрачный изомальт",k_butterflies:"бабочки",k_stars:"звёзды",k_clouds:"облака",k_pearls:"сахарный жемчуг",k_greens:"зелень",k_velour:"велюр",k_metrics:"метрика малыша",k_wings:"крылья ангела",k_cross:"крестик",k_bills:"съедобные купюры",k_choc_sails:"шоколадные паруса",k_sprinkles:"посыпка",k_hearts:"сердечки",k_bow:"бант",k_toy:"игрушка-топпер",k_cupcakes:"капкейки",k_vintage:"винтажный узор",k_coconut:"кокосовые шарики",k_ombre:"омбре",k_marble:"мраморный крем",k_sphere_shape:"форма шара",k_silhouette:"силуэт",k_cookies:"печенье с картинкой",k_name:"имя",k_crown:"корона",k_shells:"шоколадные ракушки",k_drawing:"рисунок кремом",k_garland:"гирлянда-флажки",k_feathers:"перья",k_candles:"свечи",k_wheat:"колоски",k_cat_face:"мордочка котика",k_unicorn:"рог единорога",k_rainbow:"радуга",k_ship:"кораблик и маяк",k_sparkler:"бенгальский огонь",k_lavender:"лавандовый крем",k_tie:"галстук",k_fish:"рыба ручной работы",k_candies:"драже",k_cream:"нежный крем",k_galaxy:"роспись «галактика»",k_cake_pops:"кейк-попсы",
 fl_berry:"Fresh Berry",fl_berry_l:"бисквит с малиной · чернично-мятное кремю · мусс на сметане с лимоном",fl_mcflurry:"Макфлури",fl_mcflurry_l:"бисквит брауни · клубничное желе · клубничный мусс · ванильный мусс",fl_peanut:"Арахисовый латте",fl_peanut_l:"шоколадный бисквит · хрустящий слой с арахисом и молочным шоколадом · кофейное кремю · кофейный мусс",
 fl_island:"Остров",fl_island_l:"шоколадный бисквит · солёная карамель · обжаренный фундук · шоколадный крем",fl_honey:"Медовик",fl_honey_l:"тонкие медовые коржи · сметанный крем · капля гречишного мёда",fl_napoleon:"Наполеон-цифра",fl_napoleon_l:"песочные коржи · заварной крем-пломбир · ягоды на выбор",fl_lemon:"Лимон и мак",fl_lemon_l:"лимонный бисквит с маком · лимонный курд · крем на маскарпоне",fl_vanilla_straw:"Клубника со сливками",fl_vanilla_straw_l:"ванильный бисквит · клубничный конфитюр · сливочный крем",fl_cherry_choc:"Вишня и шоколад",fl_cherry_choc_l:"шоколадный бисквит · пряная вишня · шоколадный крем-чиз",fl_caramel:"Солёная карамель",fl_caramel_l:"карамельный бисквит · домашняя солёная карамель · карамельный крем",fl_pistachio:"Фисташка и малина",fl_pistachio_l:"фисташковый бисквит · малиновое конфи · фисташковый крем",fl_mango:"Манго и маракуйя",fl_mango_l:"ванильный бисквит · кремю манго-маракуйя · сливочный крем-чиз",fl_redvelvet:"Красный бархат",fl_redvelvet_l:"бархатный бисквит с какао · крем-чиз · ягоды",fl_choc_nut:"Шоколад и орех",fl_choc_nut_l:"шоколадный бисквит · ореховая нуга · шоколадный ганаш",fl_jelly:"Фрукты в желе",fl_jelly_l:"нежный бисквит · свежие фрукты в прозрачном желе · сметанный крем",fl_cheese:"Чизкейк",fl_cheese_l:"хрустящая песочная основа · сливочный сыр · свежие ягоды"},
en:{
 cat_eyebrow:"Our work · 250+ cakes",cat_title:"Find your cake",cat_sub:"Real cakes by Angelika. Choose who it's for and the style, or type a word — “island”, “mum”, “Spider-Man”, “18”.",
 cat_search_ph:"Search: island, christening, bear, 30…",cat_who:"Who is it for",cat_style:"Occasion & style",cat_found:"Found: {n}",cat_more:"Show more",cat_empty:"Nothing found. Try another word — or describe your idea to Angelika and she'll make it from your sketch.",cat_reset:"Reset filters",
 cat_want:"I want this cake",cat_similar:"Build a similar one",cat_flavor:"Recommended filling",cat_any_flavor:"You can choose any filling — see “Fillings” below.",cat_no:"No.",cat_photo:"Photo",
 msg_want:"Hello Angelika! I'd like a cake like this one from your catalogue:",and:"and",
 p_kg:"{p} / kg",p_from_kg:"from {p} / kg",p_pair:"{p} for two",p_set:"from {p} for 6",
 q_all:"Everyone",q_kids:"Kids",q_girl:"Girls",q_boy:"Boys",q_baby:"Babies",q_teen:"Teens",q_mom:"Mum & women",q_dad:"Dad & men",q_love:"Loved ones",q_grand:"Grandparents",q_friends:"Friends",
 q_any:"All",q_island:"Island cake",q_christ:"Christening & gender reveal",q_wedding:"Wedding & anniversary",q_chars:"Heroes & characters",q_number:"Number cakes",q_bento:"Bento",q_desserts:"Desserts",q_jelly:"Fruit in jelly",q_flowers:"Fresh flowers",q_berries:"With berries",q_darkgold:"Black & gold",q_humor:"Funny",q_bears:"Teddy bears",q_winter:"New Year",
 feat_island_t:"Island cake",feat_island_d:"Our signature hit: a jelly sea, cliffs, waves and “moss”. Inside — chocolate, caramel and nuts.",feat_christ_t:"Christening",feat_christ_d:"Angel wings, a cross, soft cream — and the baby's name.",feat_bento_t:"Bento",feat_bento_d:"A 400 g mini cake with lettering — a gift they will remember.",feat_desserts_t:"Desserts",feat_desserts_d:"Cupcakes, trifles, mini tarts — from 6 pieces.",feat_go:"View",
 fl_eyebrow:"Fillings",fl_title:"What's inside",fl_sub:"Any design can be made with any filling. Three signature recipes are Angelika's own.",fl_sig:"Signature",
 bake_t:"Coming soon: fresh bakes",bake_d:"Buns, pies and croissants — sweet and savoury, filled. Exactly what the coast is missing.",bake_btn:"Let me try first",bake_msg:"Hello! Please let me know when buns, pies and croissants are available — I'd love to try them.",
 t_num_berry:"Berry number",t_num_flowers:"Flower number",t_num_meringue:"Meringue number",t_num_choc:"Chocolate number",t_num_name:"Number with a name",t_honey_jasmine:"Honey cake with jasmine",t_jelly_sea:"Sea jelly cake",t_jelly_fruit:"Fruit in jelly",t_island:"Island cake",t_island_forest:"Forest island",t_mini_set:"Mini cake set",t_heart_vintage:"Vintage heart",t_black_berries:"Black with berries",t_white_rasp:"White with raspberries",t_choc_drip_berries:"Chocolate drip & berries",t_white_gold:"White gold",t_black_gold:"Black gold",t_drip_sweets:"Drip with sweets",t_bunny:"Bunny",t_meringue_cloud:"Meringue cloud",t_butterflies:"Butterflies",t_silhouette:"Lady on the cake",t_quote:"Cake with a quote",t_wizard:"Wizard school",t_minnie:"Mouse with a bow",t_flowers_white:"White with flowers",t_happy_spheres:"Spheres & wishes",t_navy_velvet:"Navy velour",t_wedding_mono:"Wedding monogram",t_baby_metrics:"Baby's birth details",t_grandpa:"For grandpa",t_grandma:"For grandma",t_space:"Space",t_pixel:"Pixel world",t_isomalt:"Crystal",t_baby_gentle:"Gentle baby cake",t_witch:"Girl in black",t_peonies:"Peonies",t_friend:"For a friend",t_bento_set:"Bento & cupcakes",t_strawberry:"Strawberry",t_cupcakes:"Cupcakes",t_doll:"Doll & doughnuts",t_bears:"Teddy bears",t_teen_portrait:"Birthday girl portrait",t_bento_duo:"Bento pair",t_peach_roses:"Peach roses",t_pomegranate:"Pomegranate",t_cosmetics:"Beauty cake",t_dreams:"Dreams come true",t_bento:"Bento with lettering",t_unicorn:"Unicorn",t_cartoon:"Cartoon",t_two_tier:"Two tiers",t_sphere:"Sphere cake",t_half_year:"Six months",t_rainbow:"Rainbow",t_lavender:"Lavender",t_choc_flower:"Chocolate flower",t_money:"Money cake",t_nautical:"Sea voyage",t_profession:"Profession cake",t_wedding_tiers:"Tiered wedding cake",t_flowers_bright:"Bright flowers",t_mom:"For mum",t_trifle:"Desserts in cups",t_battle:"Battle royale",t_black_silver:"Black silver",t_christening:"Christening",t_social:"Social media",t_minimal:"Minimal",t_puppies:"Rescue puppies",t_cheesecake:"Cheesecake",t_for_dad:"For dad",t_crew:"Space crew",t_superhero:"Superhero",t_boss:"Little boss",t_baby_first:"First birthday",t_winter:"Snowman",t_berry_wreath:"Berry wreath",t_mini_tarts:"Mini tarts",t_dad_hero:"Hero dad",t_macaron_drip:"Macarons & drip",t_galaxy:"Galaxy",t_gender:"Boy or girl?",t_halloween:"Halloween",t_tie:"Necktie",t_tractor:"Tractor",t_ladybug:"Ladybird",t_cat:"Kitty",t_roses_pink:"Pink roses",t_football:"Football",t_car:"Car",t_fishing:"Fishing",
 k_berries:"fresh berries",k_raspberries:"raspberries",k_strawberries:"strawberries",k_blueberries:"blueberries",k_blackberries:"blackberries",k_cherries:"cherries",k_pomegranate:"pomegranate seeds",k_currant:"redcurrants",k_citrus:"citrus slices",k_kiwi:"kiwi",k_fruits:"fresh fruit",k_jelly:"clear jelly",k_jelly_sea:"a jelly sea",k_waves:"cream waves",k_moss:"edible “moss”",k_rocks:"chocolate cliffs",k_lagoon:"a jelly lagoon",k_macarons:"macarons",k_meringue:"meringues",k_lollipops:"caramel lollipops",k_cream_roses:"cream roses",k_flowers:"fresh flowers",k_roses:"fresh roses",k_peonies:"fresh peonies",k_choc_flower:"a chocolate flower",k_figure:"a handmade figure",k_bear:"a handmade teddy",k_gingerbread:"painted gingerbread",k_print:"an edible picture",k_inscription:"lettering",k_choc_letters:"chocolate letters",k_number:"a number",k_topper:"a topper",k_gold_spheres:"gold spheres",k_silver_spheres:"silver spheres",k_spheres:"chocolate spheres",k_gold_leaf:"gold leaf",k_choc_drip:"chocolate drip",k_color_drip:"coloured drip",k_oreo:"cookies",k_choc_bars:"chocolate bars",k_isomalt:"clear isomalt",k_butterflies:"butterflies",k_stars:"stars",k_clouds:"clouds",k_pearls:"sugar pearls",k_greens:"greenery",k_velour:"velour",k_metrics:"baby's birth details",k_wings:"angel wings",k_cross:"a cross",k_bills:"edible banknotes",k_choc_sails:"chocolate sails",k_sprinkles:"sprinkles",k_hearts:"hearts",k_bow:"a bow",k_toy:"a toy topper",k_cupcakes:"cupcakes",k_vintage:"vintage piping",k_coconut:"coconut truffles",k_ombre:"ombre",k_marble:"marble cream",k_sphere_shape:"a sphere shape",k_silhouette:"a silhouette",k_cookies:"picture cookies",k_name:"a name",k_crown:"a crown",k_shells:"chocolate shells",k_drawing:"a cream drawing",k_garland:"a bunting garland",k_feathers:"feathers",k_candles:"candles",k_wheat:"wheat ears",k_cat_face:"a kitty face",k_unicorn:"a unicorn horn",k_rainbow:"a rainbow",k_ship:"a ship and lighthouse",k_sparkler:"a sparkler",k_lavender:"lavender cream",k_tie:"a necktie",k_fish:"a handmade fish",k_candies:"candy drops",k_cream:"soft cream",k_galaxy:"galaxy painting",k_cake_pops:"cake pops",
 fl_berry:"Fresh Berry",fl_berry_l:"raspberry sponge · blueberry-mint crémeux · lemon sour-cream mousse",fl_mcflurry:"McFlurry",fl_mcflurry_l:"brownie base · strawberry jelly · strawberry mousse · vanilla mousse",fl_peanut:"Peanut Latte",fl_peanut_l:"chocolate sponge · peanut & milk chocolate crunch · coffee crémeux · coffee mousse",
 fl_island:"Island",fl_island_l:"chocolate sponge · salted caramel · roasted hazelnuts · chocolate cream",fl_honey:"Honey cake",fl_honey_l:"thin honey layers · sour-cream frosting · a touch of buckwheat honey",fl_napoleon:"Number cake",fl_napoleon_l:"shortcrust layers · custard ice-cream cream · berries of your choice",fl_lemon:"Lemon & poppy seed",fl_lemon_l:"lemon poppy-seed sponge · lemon curd · mascarpone cream",fl_vanilla_straw:"Strawberries & cream",fl_vanilla_straw_l:"vanilla sponge · strawberry jam · whipped cream",fl_cherry_choc:"Cherry & chocolate",fl_cherry_choc_l:"chocolate sponge · spiced cherries · chocolate cream cheese",fl_caramel:"Salted caramel",fl_caramel_l:"caramel sponge · homemade salted caramel · caramel cream",fl_pistachio:"Pistachio & raspberry",fl_pistachio_l:"pistachio sponge · raspberry confit · pistachio cream",fl_mango:"Mango & passion fruit",fl_mango_l:"vanilla sponge · mango-passion crémeux · cream cheese",fl_redvelvet:"Red velvet",fl_redvelvet_l:"cocoa velvet sponge · cream cheese · berries",fl_choc_nut:"Chocolate & nut",fl_choc_nut_l:"chocolate sponge · nut nougat · chocolate ganache",fl_jelly:"Fruit in jelly",fl_jelly_l:"light sponge · fresh fruit in clear jelly · sour-cream frosting",fl_cheese:"Cheesecake",fl_cheese_l:"crisp shortcrust base · cream cheese · fresh berries"},
bg:{
 cat_eyebrow:"Каталог · 250+ торти",cat_title:"Намерете своята торта",cat_sub:"Истински торти на Анжелика. Изберете за кого е и какъв стил, или напишете дума — „остров“, „мама“, „Спайдърмен“, „18“.",
 cat_search_ph:"Търсене: остров, кръщене, мече, 30…",cat_who:"За кого",cat_style:"Повод и стил",cat_found:"Намерени: {n}",cat_more:"Покажи още",cat_empty:"Нищо не е намерено. Опитайте друга дума — или опишете идеята си на Анжелика.",cat_reset:"Изчисти филтрите",
 cat_want:"Искам такава торта",cat_similar:"Създай подобна в конструктора",cat_flavor:"Препоръчваме плънка",cat_any_flavor:"Може да изберете всяка плънка — вижте „Плънки“ по-долу.",cat_no:"№",cat_photo:"Снимка",
 msg_want:"Здравейте, Анжелика! Искам торта като тази от каталога ви:",and:"и",
 p_kg:"{p} / кг",p_from_kg:"от {p} / кг",p_pair:"{p} за двете",p_set:"от {p} за 6 бр.",
 q_all:"Всички",q_kids:"Деца",q_girl:"Момиче",q_boy:"Момче",q_baby:"Бебе",q_teen:"Тийнейджър",q_mom:"Мама и жени",q_dad:"Татко и мъже",q_love:"Любими",q_grand:"Баба и дядо",q_friends:"Приятели",
 q_any:"Всички",q_island:"Торта-остров",q_christ:"Кръщене и gender party",q_wedding:"Сватба и годишнина",q_chars:"Герои и персонажи",q_number:"Торти-цифри",q_bento:"Бенто",q_desserts:"Десерти",q_jelly:"Плодове в желе",q_flowers:"С живи цветя",q_berries:"С плодове",q_darkgold:"Черно и злато",q_humor:"С хумор",q_bears:"Мечета",q_winter:"Нова година",
 feat_island_t:"Торта-остров",feat_island_d:"Нашият хит: море от желе, скали, вълни и „мъх“. Вътре — шоколад, карамел и ядки.",feat_christ_t:"Кръщене",feat_christ_d:"Ангелски крила, кръстче, нежен крем — и името на бебето.",feat_bento_t:"Бенто",feat_bento_d:"Мини торта 400 г с надпис — подарък, който се помни.",feat_desserts_t:"Десерти",feat_desserts_d:"Къпкейкове, трайфли, мини тарти — от 6 броя.",feat_go:"Виж",
 fl_eyebrow:"Плънки",fl_title:"Какво има вътре",fl_sub:"Всеки дизайн може да е с всяка плънка. Три са авторски рецепти на Анжелика.",fl_sig:"Авторска",
 bake_t:"Скоро: прясна закуска",bake_d:"Кифлички, пирожки и кроасани — сладки и солени, с плънка.",bake_btn:"Искам да опитам пръв",bake_msg:"Здравейте! Пишете ми, когато има кифлички, пирожки и кроасани — искам да опитам.",
 t_num_berry:"Цифра с плодове",t_num_flowers:"Цифра с цветя",t_num_meringue:"Цифра с целувки",t_num_choc:"Шоколадова цифра",t_num_name:"Цифра с име",t_honey_jasmine:"Медена торта с жасмин",t_jelly_sea:"Морска желирана",t_jelly_fruit:"Плодове в желе",t_island:"Торта-остров",t_island_forest:"Горски остров",t_mini_set:"Комплект мини торти",t_heart_vintage:"Винтидж сърце",t_black_berries:"Черна с плодове",t_white_rasp:"Бяла с малини",t_choc_drip_berries:"Шоколад и плодове",t_white_gold:"Бяло злато",t_black_gold:"Черно злато",t_drip_sweets:"Дрип със сладкиши",t_bunny:"Зайче",t_meringue_cloud:"Облак от целувки",t_butterflies:"Пеперуди",t_silhouette:"Дама на тортата",t_quote:"Торта с надпис",t_wizard:"Магьосническо училище",t_minnie:"Мишка с панделка",t_flowers_white:"Бяла с цветя",t_happy_spheres:"Сфери и пожелание",t_navy_velvet:"Син велур",t_wedding_mono:"Сватбен монограм",t_baby_metrics:"Бебешка метрика",t_grandpa:"За дядо",t_grandma:"За баба",t_space:"Космос",t_pixel:"Пикселен свят",t_isomalt:"Кристална",t_baby_gentle:"Нежна за бебе",t_witch:"Момиче в черно",t_peonies:"Божури",t_friend:"За приятел",t_bento_set:"Бенто и къпкейкове",t_strawberry:"Ягодова",t_cupcakes:"Къпкейкове",t_doll:"Кукла и понички",t_bears:"Мечета",t_teen_portrait:"Портрет на рожденичката",t_bento_duo:"Две бенто",t_peach_roses:"Прасковени рози",t_pomegranate:"Нарова",t_cosmetics:"Бюти торта",t_dreams:"Мечтите се сбъдват",t_bento:"Бенто с надпис",t_unicorn:"Еднорог",t_cartoon:"Анимационна",t_two_tier:"Двуетажна",t_sphere:"Торта-сфера",t_half_year:"Половин годинка",t_rainbow:"Дъга",t_lavender:"Лавандула",t_choc_flower:"Шоколадово цвете",t_money:"Парична",t_nautical:"Морско пътешествие",t_profession:"По професия",t_wedding_tiers:"Етажна сватбена",t_flowers_bright:"Ярки цветя",t_mom:"За мама",t_trifle:"Десерти в чашки",t_battle:"Кралска битка",t_black_silver:"Черно сребро",t_christening:"Кръщене",t_social:"Социални мрежи",t_minimal:"Минимализъм",t_puppies:"Кученца спасители",t_cheesecake:"Чийзкейк",t_for_dad:"За татко",t_crew:"Космически екипаж",t_superhero:"Супергерой",t_boss:"Малкият шеф",t_baby_first:"Първа годинка",t_winter:"Снежко",t_berry_wreath:"Венец от плодове",t_mini_tarts:"Мини тарти",t_dad_hero:"Татко-герой",t_macaron_drip:"Макарони и дрип",t_galaxy:"Галактика",t_gender:"Момче или момиче?",t_halloween:"Хелоуин",t_tie:"Вратовръзка",t_tractor:"Трактор",t_ladybug:"Калинка",t_cat:"Котенце",t_roses_pink:"Розови рози",t_football:"Футбол",t_car:"Автомобил",t_fishing:"Риболов",
 k_berries:"пресни плодове",k_raspberries:"малини",k_strawberries:"ягоди",k_blueberries:"боровинки",k_blackberries:"къпини",k_cherries:"череши",k_pomegranate:"нарови зърна",k_currant:"червено френско грозде",k_citrus:"резенчета цитруси",k_kiwi:"киви",k_fruits:"пресни плодове",k_jelly:"прозрачно желе",k_jelly_sea:"море от желе",k_waves:"кремови вълни",k_moss:"ядлив „мъх“",k_rocks:"шоколадови скали",k_lagoon:"лагуна от желе",k_macarons:"макарони",k_meringue:"целувки",k_lollipops:"карамелени близалки",k_cream_roses:"кремови рози",k_flowers:"живи цветя",k_roses:"живи рози",k_peonies:"живи божури",k_choc_flower:"шоколадово цвете",k_figure:"ръчна фигурка",k_bear:"ръчно мече",k_gingerbread:"рисуван меденник",k_print:"ядлива картинка",k_inscription:"надпис",k_choc_letters:"шоколадови букви",k_number:"цифра",k_topper:"топер",k_gold_spheres:"златни сфери",k_silver_spheres:"сребърни сфери",k_spheres:"шоколадови топки",k_gold_leaf:"златно фолио",k_choc_drip:"шоколадов дрип",k_color_drip:"цветен дрип",k_oreo:"бисквити",k_choc_bars:"шоколадови барчета",k_isomalt:"прозрачен изомалт",k_butterflies:"пеперуди",k_stars:"звезди",k_clouds:"облачета",k_pearls:"захарни перли",k_greens:"зеленина",k_velour:"велур",k_metrics:"бебешка метрика",k_wings:"ангелски крила",k_cross:"кръстче",k_bills:"ядливи банкноти",k_choc_sails:"шоколадови платна",k_sprinkles:"поръска",k_hearts:"сърчица",k_bow:"панделка",k_toy:"играчка-топер",k_cupcakes:"къпкейкове",k_vintage:"винтидж декорация",k_coconut:"кокосови топчета",k_ombre:"омбре",k_marble:"мраморен крем",k_sphere_shape:"форма на сфера",k_silhouette:"силует",k_cookies:"бисквити с картинка",k_name:"име",k_crown:"корона",k_shells:"шоколадови мидички",k_drawing:"рисунка с крем",k_garland:"гирлянд",k_feathers:"пера",k_candles:"свещи",k_wheat:"класове",k_cat_face:"котешко муцунче",k_unicorn:"рог на еднорог",k_rainbow:"дъга",k_ship:"корабче и фар",k_sparkler:"бенгалски огън",k_lavender:"лавандулов крем",k_tie:"вратовръзка",k_fish:"ръчна рибка",k_candies:"драже",k_cream:"нежен крем",k_galaxy:"рисунка „галактика“",k_cake_pops:"кейк попс",
 fl_berry:"Fresh Berry",fl_berry_l:"блат с малини · боровинково-ментово кремо · мус със заквасена сметана и лимон",fl_mcflurry:"Макфлури",fl_mcflurry_l:"брауни · ягодово желе · ягодов мус · ванилов мус",fl_peanut:"Фъстъчено лате",fl_peanut_l:"шоколадов блат · хрупкав слой с фъстъци и млечен шоколад · кафе кремо · кафе мус",
 fl_island:"Остров",fl_island_l:"шоколадов блат · солен карамел · печени лешници · шоколадов крем",fl_honey:"Медена торта",fl_honey_l:"тънки медени блатове · крем със сметана · капка елдов мед",fl_napoleon:"Цифра „Наполеон“",fl_napoleon_l:"маслени блатове · сладоледен крем · плодове по избор",fl_lemon:"Лимон и мак",fl_lemon_l:"лимонов блат с мак · лимонов крем · крем с маскарпоне",fl_vanilla_straw:"Ягоди със сметана",fl_vanilla_straw_l:"ванилов блат · ягодов конфитюр · сметанов крем",fl_cherry_choc:"Вишна и шоколад",fl_cherry_choc_l:"шоколадов блат · пикантна вишна · шоколадов крем-сирене",fl_caramel:"Солен карамел",fl_caramel_l:"карамелен блат · домашен солен карамел · карамелен крем",fl_pistachio:"Шамфъстък и малина",fl_pistachio_l:"блат с шамфъстък · малиново конфи · крем с шамфъстък",fl_mango:"Манго и маракуя",fl_mango_l:"ванилов блат · кремо манго-маракуя · крем-сирене",fl_redvelvet:"Червено кадифе",fl_redvelvet_l:"кадифен блат с какао · крем-сирене · плодове",fl_choc_nut:"Шоколад и ядки",fl_choc_nut_l:"шоколадов блат · ядков нуга · шоколадов ганаш",fl_jelly:"Плодове в желе",fl_jelly_l:"лек блат · пресни плодове в прозрачно желе · сметанов крем",fl_cheese:"Чийзкейк",fl_cheese_l:"хрупкава основа · крема сирене · пресни плодове"},
ch:{
 cat_eyebrow:"Katalog · 250+ Torten",cat_title:"Finden Sie Ihre Torte",cat_sub:"Echte Torten von Angelika. Wählen Sie, für wen und welcher Stil — oder tippen Sie ein Wort: «Insel», «Mama», «Spider-Man», «18».",
 cat_search_ph:"Suche: Insel, Taufe, Bär, 30…",cat_who:"Für wen",cat_style:"Anlass & Stil",cat_found:"Gefunden: {n}",cat_more:"Mehr anzeigen",cat_empty:"Nichts gefunden. Versuchen Sie ein anderes Wort — oder beschreiben Sie Angelika Ihre Idee.",cat_reset:"Filter zurücksetzen",
 cat_want:"Diese Torte möchte ich",cat_similar:"Ähnliche im Konfigurator gestalten",cat_flavor:"Empfohlene Füllung",cat_any_flavor:"Jede Füllung ist möglich — siehe «Füllungen» unten.",cat_no:"Nr.",cat_photo:"Foto",
 msg_want:"Grüezi Angelika! Ich möchte eine Torte wie diese aus Ihrem Katalog:",and:"und",
 p_kg:"{p} / kg",p_from_kg:"ab {p} / kg",p_pair:"{p} für zwei",p_set:"ab {p} für 6 Stk.",
 q_all:"Alle",q_kids:"Kinder",q_girl:"Mädchen",q_boy:"Jungen",q_baby:"Babys",q_teen:"Teenager",q_mom:"Mama & Frauen",q_dad:"Papa & Männer",q_love:"Liebste",q_grand:"Grosseltern",q_friends:"Freunde",
 q_any:"Alle",q_island:"Insel-Torte",q_christ:"Taufe & Gender Reveal",q_wedding:"Hochzeit & Jahrestag",q_chars:"Helden & Figuren",q_number:"Zahlentorten",q_bento:"Bento",q_desserts:"Desserts",q_jelly:"Früchte in Gelee",q_flowers:"Mit frischen Blumen",q_berries:"Mit Beeren",q_darkgold:"Schwarz & Gold",q_humor:"Lustig",q_bears:"Teddybären",q_winter:"Neujahr",
 feat_island_t:"Insel-Torte",feat_island_d:"Unser Hit: ein Meer aus Gelee, Felsen, Wellen und «Moos». Innen Schokolade, Karamell und Nüsse.",feat_christ_t:"Taufe",feat_christ_d:"Engelsflügel, Kreuz, zarte Creme — und der Name des Babys.",feat_bento_t:"Bento",feat_bento_d:"Minitorte 400 g mit Aufschrift — ein Geschenk, das bleibt.",feat_desserts_t:"Desserts",feat_desserts_d:"Cupcakes, Trifles, Mini-Tartes — ab 6 Stück.",feat_go:"Ansehen",
 fl_eyebrow:"Füllungen",fl_title:"Was drin ist",fl_sub:"Jedes Design mit jeder Füllung. Drei sind Angelikas eigene Rezepte.",fl_sig:"Hausrezept",
 bake_t:"Bald: frisches Gebäck",bake_d:"Brötchen, Piroggen und Croissants — süss und salzig, gefüllt.",bake_btn:"Ich will zuerst probieren",bake_msg:"Grüezi! Bitte melden Sie sich, wenn es Brötchen, Piroggen und Croissants gibt — ich möchte probieren.",
 t_num_berry:"Beeren-Zahl",t_num_flowers:"Blumen-Zahl",t_num_meringue:"Meringue-Zahl",t_num_choc:"Schoko-Zahl",t_num_name:"Zahl mit Namen",t_honey_jasmine:"Honigtorte mit Jasmin",t_jelly_sea:"Meeres-Geleetorte",t_jelly_fruit:"Früchte in Gelee",t_island:"Insel-Torte",t_island_forest:"Waldinsel",t_mini_set:"Minitorten-Set",t_heart_vintage:"Vintage-Herz",t_black_berries:"Schwarz mit Beeren",t_white_rasp:"Weiss mit Himbeeren",t_choc_drip_berries:"Schoko-Drip & Beeren",t_white_gold:"Weissgold",t_black_gold:"Schwarzgold",t_drip_sweets:"Drip mit Süssem",t_bunny:"Häschen",t_meringue_cloud:"Meringue-Wolke",t_butterflies:"Schmetterlinge",t_silhouette:"Dame auf der Torte",t_quote:"Torte mit Spruch",t_wizard:"Zauberschule",t_minnie:"Maus mit Schleife",t_flowers_white:"Weiss mit Blumen",t_happy_spheres:"Kugeln & Glückwunsch",t_navy_velvet:"Blauer Velours",t_wedding_mono:"Hochzeitsmonogramm",t_baby_metrics:"Babys Geburtsdaten",t_grandpa:"Für Opa",t_grandma:"Für Oma",t_space:"Weltall",t_pixel:"Pixelwelt",t_isomalt:"Kristall",t_baby_gentle:"Zart fürs Baby",t_witch:"Mädchen in Schwarz",t_peonies:"Pfingstrosen",t_friend:"Für den Freund",t_bento_set:"Bento & Cupcakes",t_strawberry:"Erdbeere",t_cupcakes:"Cupcakes",t_doll:"Puppe & Donuts",t_bears:"Teddybären",t_teen_portrait:"Porträt der Jubilarin",t_bento_duo:"Bento-Paar",t_peach_roses:"Pfirsichrosen",t_pomegranate:"Granatapfel",t_cosmetics:"Beauty-Torte",t_dreams:"Träume werden wahr",t_bento:"Bento mit Aufschrift",t_unicorn:"Einhorn",t_cartoon:"Zeichentrick",t_two_tier:"Zweistöckig",t_sphere:"Kugeltorte",t_half_year:"Ein halbes Jahr",t_rainbow:"Regenbogen",t_lavender:"Lavendel",t_choc_flower:"Schoko-Blume",t_money:"Geld-Torte",t_nautical:"Seereise",t_profession:"Berufstorte",t_wedding_tiers:"Hochzeitstorte mit Stöcken",t_flowers_bright:"Bunte Blumen",t_mom:"Für Mama",t_trifle:"Desserts im Glas",t_battle:"Battle Royale",t_black_silver:"Schwarzsilber",t_christening:"Taufe",t_social:"Social Media",t_minimal:"Minimal",t_puppies:"Rettungswelpen",t_cheesecake:"Cheesecake",t_for_dad:"Für Papa",t_crew:"Weltraum-Crew",t_superhero:"Superheld",t_boss:"Kleiner Boss",t_baby_first:"Erster Geburtstag",t_winter:"Schneemann",t_berry_wreath:"Beerenkranz",t_mini_tarts:"Mini-Tartes",t_dad_hero:"Held Papa",t_macaron_drip:"Macarons & Drip",t_galaxy:"Galaxie",t_gender:"Junge oder Mädchen?",t_halloween:"Halloween",t_tie:"Krawatte",t_tractor:"Traktor",t_ladybug:"Marienkäfer",t_cat:"Kätzchen",t_roses_pink:"Rosa Rosen",t_football:"Fussball",t_car:"Auto",t_fishing:"Angeln",
 k_berries:"frische Beeren",k_raspberries:"Himbeeren",k_strawberries:"Erdbeeren",k_blueberries:"Heidelbeeren",k_blackberries:"Brombeeren",k_cherries:"Kirschen",k_pomegranate:"Granatapfelkerne",k_currant:"rote Johannisbeeren",k_citrus:"Zitrusscheiben",k_kiwi:"Kiwi",k_fruits:"frische Früchte",k_jelly:"klares Gelee",k_jelly_sea:"ein Meer aus Gelee",k_waves:"Cremewellen",k_moss:"essbares «Moos»",k_rocks:"Schokofelsen",k_lagoon:"eine Geleelagune",k_macarons:"Macarons",k_meringue:"Meringues",k_lollipops:"Karamell-Lollis",k_cream_roses:"Cremerosen",k_flowers:"frische Blumen",k_roses:"frische Rosen",k_peonies:"frische Pfingstrosen",k_choc_flower:"eine Schokoblume",k_figure:"eine handgemachte Figur",k_bear:"ein handgemachter Teddy",k_gingerbread:"bemalter Lebkuchen",k_print:"ein essbares Bild",k_inscription:"Aufschrift",k_choc_letters:"Schokobuchstaben",k_number:"eine Zahl",k_topper:"ein Topper",k_gold_spheres:"Goldkugeln",k_silver_spheres:"Silberkugeln",k_spheres:"Schokokugeln",k_gold_leaf:"Blattgold",k_choc_drip:"Schoko-Drip",k_color_drip:"farbiger Drip",k_oreo:"Kekse",k_choc_bars:"Schokoriegel",k_isomalt:"klares Isomalt",k_butterflies:"Schmetterlinge",k_stars:"Sterne",k_clouds:"Wolken",k_pearls:"Zuckerperlen",k_greens:"Grün",k_velour:"Velours",k_metrics:"Babys Geburtsdaten",k_wings:"Engelsflügel",k_cross:"ein Kreuz",k_bills:"essbare Geldscheine",k_choc_sails:"Schokosegel",k_sprinkles:"Streusel",k_hearts:"Herzen",k_bow:"eine Schleife",k_toy:"ein Spielzeug-Topper",k_cupcakes:"Cupcakes",k_vintage:"Vintage-Spritzdekor",k_coconut:"Kokoskugeln",k_ombre:"Ombré",k_marble:"Marmorcreme",k_sphere_shape:"Kugelform",k_silhouette:"eine Silhouette",k_cookies:"Bildkekse",k_name:"ein Name",k_crown:"eine Krone",k_shells:"Schokomuscheln",k_drawing:"eine Cremezeichnung",k_garland:"eine Wimpelkette",k_feathers:"Federn",k_candles:"Kerzen",k_wheat:"Ähren",k_cat_face:"ein Katzengesicht",k_unicorn:"ein Einhorn-Horn",k_rainbow:"ein Regenbogen",k_ship:"Schiff und Leuchtturm",k_sparkler:"eine Wunderkerze",k_lavender:"Lavendelcreme",k_tie:"eine Krawatte",k_fish:"ein handgemachter Fisch",k_candies:"Dragees",k_cream:"zarte Creme",k_galaxy:"Galaxie-Malerei",k_cake_pops:"Cake Pops",
 fl_berry:"Fresh Berry",fl_berry_l:"Himbeerbiskuit · Heidelbeer-Minz-Crémeux · Sauerrahm-Zitronenmousse",fl_mcflurry:"McFlurry",fl_mcflurry_l:"Brownie · Erdbeergelee · Erdbeermousse · Vanillemousse",fl_peanut:"Erdnuss-Latte",fl_peanut_l:"Schokobiskuit · Erdnuss-Milchschoko-Crunch · Kaffee-Crémeux · Kaffeemousse",
 fl_island:"Insel",fl_island_l:"Schokobiskuit · Salzkaramell · geröstete Haselnüsse · Schokocreme",fl_honey:"Honigtorte",fl_honey_l:"dünne Honigböden · Sauerrahmcreme · etwas Buchweizenhonig",fl_napoleon:"Zahlentorte",fl_napoleon_l:"Mürbeteigböden · Vanille-Glacecreme · Beeren nach Wahl",fl_lemon:"Zitrone & Mohn",fl_lemon_l:"Zitronen-Mohn-Biskuit · Lemon Curd · Mascarponecreme",fl_vanilla_straw:"Erdbeeren mit Rahm",fl_vanilla_straw_l:"Vanillebiskuit · Erdbeerkonfitüre · Rahmcreme",fl_cherry_choc:"Kirsche & Schokolade",fl_cherry_choc_l:"Schokobiskuit · gewürzte Kirschen · Schoko-Frischkäsecreme",fl_caramel:"Salzkaramell",fl_caramel_l:"Karamellbiskuit · hausgemachtes Salzkaramell · Karamellcreme",fl_pistachio:"Pistazie & Himbeere",fl_pistachio_l:"Pistazienbiskuit · Himbeerkonfit · Pistaziencreme",fl_mango:"Mango & Maracuja",fl_mango_l:"Vanillebiskuit · Mango-Maracuja-Crémeux · Frischkäsecreme",fl_redvelvet:"Red Velvet",fl_redvelvet_l:"Kakao-Velvet-Biskuit · Frischkäsecreme · Beeren",fl_choc_nut:"Schokolade & Nuss",fl_choc_nut_l:"Schokobiskuit · Nussnougat · Schokoganache",fl_jelly:"Früchte in Gelee",fl_jelly_l:"leichter Biskuit · frische Früchte in klarem Gelee · Sauerrahmcreme",fl_cheese:"Cheesecake",fl_cheese_l:"knuspriger Mürbeteig · Frischkäse · frische Beeren"},
it:{
 cat_eyebrow:"Catalogo · 250+ torte",cat_title:"Trova la tua torta",cat_sub:"Torte vere di Angelika. Scegli per chi è e lo stile, oppure scrivi una parola: «isola», «mamma», «Spider-Man», «18».",
 cat_search_ph:"Cerca: isola, battesimo, orsetto, 30…",cat_who:"Per chi",cat_style:"Occasione e stile",cat_found:"Trovate: {n}",cat_more:"Mostra altre",cat_empty:"Nessun risultato. Prova un'altra parola, oppure descrivi la tua idea ad Angelika.",cat_reset:"Azzera i filtri",
 cat_want:"Voglio questa torta",cat_similar:"Creane una simile",cat_flavor:"Ripieno consigliato",cat_any_flavor:"Puoi scegliere qualsiasi ripieno: vedi «Ripieni» sotto.",cat_no:"N.",cat_photo:"Foto",
 msg_want:"Ciao Angelika! Vorrei una torta come questa del tuo catalogo:",and:"e",
 p_kg:"{p} / kg",p_from_kg:"da {p} / kg",p_pair:"{p} la coppia",p_set:"da {p} per 6 pz",
 q_all:"Tutti",q_kids:"Bambini",q_girl:"Bambina",q_boy:"Bambino",q_baby:"Neonati",q_teen:"Ragazzi",q_mom:"Mamma e donne",q_dad:"Papà e uomini",q_love:"Innamorati",q_grand:"Nonni",q_friends:"Amici",
 q_any:"Tutte",q_island:"Torta isola",q_christ:"Battesimo e gender reveal",q_wedding:"Nozze e anniversari",q_chars:"Eroi e personaggi",q_number:"Torte numero",q_bento:"Bento",q_desserts:"Dessert",q_jelly:"Frutta in gelatina",q_flowers:"Con fiori freschi",q_berries:"Con frutti di bosco",q_darkgold:"Nero e oro",q_humor:"Divertenti",q_bears:"Orsetti",q_winter:"Capodanno",
 feat_island_t:"Torta isola",feat_island_d:"Il nostro successo: un mare di gelatina, scogli, onde e «muschio». Dentro cioccolato, caramello e nocciole.",feat_christ_t:"Battesimo",feat_christ_d:"Ali d'angelo, crocetta, crema delicata e il nome del bimbo.",feat_bento_t:"Bento",feat_bento_d:"Mini torta da 400 g con scritta: un regalo che resta.",feat_desserts_t:"Dessert",feat_desserts_d:"Cupcake, trifle, mini crostate: da 6 pezzi.",feat_go:"Guarda",
 fl_eyebrow:"Ripieni",fl_title:"Cosa c'è dentro",fl_sub:"Ogni design con qualsiasi ripieno. Tre sono ricette d'autore di Angelika.",fl_sig:"D'autore",
 bake_t:"Presto: prodotti da forno",bake_d:"Panini, fagottini e croissant, dolci e salati, ripieni.",bake_btn:"Voglio assaggiare per primo",bake_msg:"Ciao! Avvisami quando arrivano panini, fagottini e croissant: voglio assaggiarli.",
 t_num_berry:"Numero ai frutti di bosco",t_num_flowers:"Numero fiorito",t_num_meringue:"Numero con meringhe",t_num_choc:"Numero al cioccolato",t_num_name:"Numero con nome",t_honey_jasmine:"Torta al miele con gelsomino",t_jelly_sea:"Gelatina marina",t_jelly_fruit:"Frutta in gelatina",t_island:"Torta isola",t_island_forest:"Isola nel bosco",t_mini_set:"Set di mini torte",t_heart_vintage:"Cuore vintage",t_black_berries:"Nera ai frutti di bosco",t_white_rasp:"Bianca ai lamponi",t_choc_drip_berries:"Colata di cioccolato e frutti",t_white_gold:"Oro bianco",t_black_gold:"Oro nero",t_drip_sweets:"Drip con dolcetti",t_bunny:"Coniglietto",t_meringue_cloud:"Nuvola di meringhe",t_butterflies:"Farfalle",t_silhouette:"Signora sulla torta",t_quote:"Torta con frase",t_wizard:"Scuola di magia",t_minnie:"Topolina col fiocco",t_flowers_white:"Bianca con fiori",t_happy_spheres:"Sfere e auguri",t_navy_velvet:"Velluto blu",t_wedding_mono:"Monogramma nuziale",t_baby_metrics:"I dati del neonato",t_grandpa:"Per il nonno",t_grandma:"Per la nonna",t_space:"Spazio",t_pixel:"Mondo a pixel",t_isomalt:"Cristallo",t_baby_gentle:"Delicata per neonati",t_witch:"Ragazza in nero",t_peonies:"Peonie",t_friend:"Per l'amico",t_bento_set:"Bento e cupcake",t_strawberry:"Alle fragole",t_cupcakes:"Cupcake",t_doll:"Bambola e ciambelle",t_bears:"Orsetti",t_teen_portrait:"Ritratto della festeggiata",t_bento_duo:"Coppia di bento",t_peach_roses:"Rose pesca",t_pomegranate:"Al melograno",t_cosmetics:"Beauty cake",t_dreams:"I sogni si avverano",t_bento:"Bento con scritta",t_unicorn:"Unicorno",t_cartoon:"Cartoni animati",t_two_tier:"A due piani",t_sphere:"Torta sfera",t_half_year:"Sei mesi",t_rainbow:"Arcobaleno",t_lavender:"Lavanda",t_choc_flower:"Fiore di cioccolato",t_money:"Torta dei soldi",t_nautical:"Viaggio per mare",t_profession:"Per professione",t_wedding_tiers:"Nuziale a piani",t_flowers_bright:"Fiori vivaci",t_mom:"Per la mamma",t_trifle:"Dessert in bicchiere",t_battle:"Battle royale",t_black_silver:"Argento nero",t_christening:"Battesimo",t_social:"Social",t_minimal:"Minimal",t_puppies:"Cuccioli soccorritori",t_cheesecake:"Cheesecake",t_for_dad:"Per il papà",t_crew:"Equipaggio spaziale",t_superhero:"Supereroe",t_boss:"Piccolo capo",t_baby_first:"Primo compleanno",t_winter:"Pupazzo di neve",t_berry_wreath:"Corona di frutti",t_mini_tarts:"Mini crostate",t_dad_hero:"Papà eroe",t_macaron_drip:"Macaron e colata",t_galaxy:"Galassia",t_gender:"Maschio o femmina?",t_halloween:"Halloween",t_tie:"Cravatta",t_tractor:"Trattore",t_ladybug:"Coccinella",t_cat:"Gattino",t_roses_pink:"Rose rosa",t_football:"Calcio",t_car:"Automobile",t_fishing:"Pesca",
 k_berries:"frutti di bosco freschi",k_raspberries:"lamponi",k_strawberries:"fragole",k_blueberries:"mirtilli",k_blackberries:"more",k_cherries:"ciliegie",k_pomegranate:"chicchi di melograno",k_currant:"ribes rosso",k_citrus:"fette di agrumi",k_kiwi:"kiwi",k_fruits:"frutta fresca",k_jelly:"gelatina trasparente",k_jelly_sea:"un mare di gelatina",k_waves:"onde di crema",k_moss:"«muschio» commestibile",k_rocks:"scogli di cioccolato",k_lagoon:"una laguna di gelatina",k_macarons:"macaron",k_meringue:"meringhe",k_lollipops:"lecca-lecca al caramello",k_cream_roses:"rose di crema",k_flowers:"fiori freschi",k_roses:"rose fresche",k_peonies:"peonie fresche",k_choc_flower:"un fiore di cioccolato",k_figure:"una figurina fatta a mano",k_bear:"un orsetto fatto a mano",k_gingerbread:"pan di zenzero dipinto",k_print:"un'immagine commestibile",k_inscription:"scritta",k_choc_letters:"lettere di cioccolato",k_number:"un numero",k_topper:"un topper",k_gold_spheres:"sfere dorate",k_silver_spheres:"sfere argentate",k_spheres:"sfere di cioccolato",k_gold_leaf:"foglia d'oro",k_choc_drip:"colata di cioccolato",k_color_drip:"colata colorata",k_oreo:"biscotti",k_choc_bars:"barrette di cioccolato",k_isomalt:"isomalto trasparente",k_butterflies:"farfalle",k_stars:"stelle",k_clouds:"nuvole",k_pearls:"perle di zucchero",k_greens:"foglie verdi",k_velour:"velluto",k_metrics:"i dati del neonato",k_wings:"ali d'angelo",k_cross:"una crocetta",k_bills:"banconote commestibili",k_choc_sails:"vele di cioccolato",k_sprinkles:"codette",k_hearts:"cuoricini",k_bow:"un fiocco",k_toy:"un giocattolo topper",k_cupcakes:"cupcake",k_vintage:"decoro vintage",k_coconut:"palline al cocco",k_ombre:"sfumatura ombré",k_marble:"crema marmorizzata",k_sphere_shape:"forma a sfera",k_silhouette:"una silhouette",k_cookies:"biscotti decorati",k_name:"un nome",k_crown:"una corona",k_shells:"conchiglie di cioccolato",k_drawing:"un disegno di crema",k_garland:"una ghirlanda di bandierine",k_feathers:"piume",k_candles:"candeline",k_wheat:"spighe",k_cat_face:"un musetto di gatto",k_unicorn:"un corno di unicorno",k_rainbow:"un arcobaleno",k_ship:"nave e faro",k_sparkler:"una stellina scintillante",k_lavender:"crema alla lavanda",k_tie:"una cravatta",k_fish:"un pesce fatto a mano",k_candies:"confettini",k_cream:"crema delicata",k_galaxy:"dipinto «galassia»",k_cake_pops:"cake pop",
 fl_berry:"Fresh Berry",fl_berry_l:"pan di Spagna ai lamponi · crémeux mirtillo e menta · mousse panna acida e limone",fl_mcflurry:"McFlurry",fl_mcflurry_l:"brownie · gelatina di fragole · mousse di fragole · mousse alla vaniglia",fl_peanut:"Latte alle arachidi",fl_peanut_l:"pan di Spagna al cioccolato · croccante arachidi e cioccolato al latte · crémeux e mousse al caffè",
 fl_island:"Isola",fl_island_l:"pan di Spagna al cioccolato · caramello salato · nocciole tostate · crema al cioccolato",fl_honey:"Torta al miele",fl_honey_l:"sottili strati al miele · crema di panna acida · un tocco di miele di grano saraceno",fl_napoleon:"Torta numero",fl_napoleon_l:"strati di frolla · crema al gelato · frutti a scelta",fl_lemon:"Limone e papavero",fl_lemon_l:"pan di Spagna limone e papavero · lemon curd · crema al mascarpone",fl_vanilla_straw:"Fragole e panna",fl_vanilla_straw_l:"pan di Spagna alla vaniglia · confettura di fragole · crema di panna",fl_cherry_choc:"Ciliegia e cioccolato",fl_cherry_choc_l:"pan di Spagna al cioccolato · ciliegie speziate · crema al formaggio e cioccolato",fl_caramel:"Caramello salato",fl_caramel_l:"pan di Spagna al caramello · caramello salato fatto in casa · crema al caramello",fl_pistachio:"Pistacchio e lampone",fl_pistachio_l:"pan di Spagna al pistacchio · confit di lamponi · crema al pistacchio",fl_mango:"Mango e passion fruit",fl_mango_l:"pan di Spagna alla vaniglia · crémeux mango e passion fruit · crema al formaggio",fl_redvelvet:"Red velvet",fl_redvelvet_l:"pan di Spagna velvet al cacao · crema al formaggio · frutti di bosco",fl_choc_nut:"Cioccolato e nocciola",fl_choc_nut_l:"pan di Spagna al cioccolato · torrone di nocciole · ganache al cioccolato",fl_jelly:"Frutta in gelatina",fl_jelly_l:"pan di Spagna leggero · frutta fresca in gelatina trasparente · crema di panna acida",fl_cheese:"Cheesecake",fl_cheese_l:"base croccante di frolla · formaggio cremoso · frutti di bosco freschi"},
ua:{
 cat_eyebrow:"Каталог робіт · 250+ тортів",cat_title:"Знайдіть свій торт",cat_sub:"Справжні роботи Анжеліки. Оберіть, для кого торт і який він, або впишіть слово — «острів», «мама», «Людина-павук», «18».",
 cat_search_ph:"Пошук: острів, хрестини, ведмедик, 30…",cat_who:"Для кого",cat_style:"Привід і стиль",cat_found:"Знайдено: {n}",cat_more:"Показати ще",cat_empty:"Нічого не знайшлося. Спробуйте інше слово — або опишіть ідею Анжеліці, вона зробить за вашим ескізом.",cat_reset:"Скинути фільтри",
 cat_want:"Хочу такий торт",cat_similar:"Зібрати схожий у конструкторі",cat_flavor:"Радимо начинку",cat_any_flavor:"Начинку можна обрати будь-яку — дивіться «Начинки» нижче.",cat_no:"№",cat_photo:"Фото",
 msg_want:"Вітаю, Анжеліко! Хочу торт як у вашому каталозі:",and:"і",
 p_kg:"{p} / кг",p_from_kg:"від {p} / кг",p_pair:"{p} за пару",p_set:"від {p} за 6 шт.",
 q_all:"Усім",q_kids:"Дітям",q_girl:"Дівчинці",q_boy:"Хлопчику",q_baby:"Малюку до року",q_teen:"Підлітку",q_mom:"Мамі та жінкам",q_dad:"Татові та чоловікам",q_love:"Коханим",q_grand:"Бабусі й дідусю",q_friends:"Друзям",
 q_any:"Усі",q_island:"Торт-острів",q_christ:"Хрестини та гендер-паті",q_wedding:"Весілля та річниця",q_chars:"Герої та персонажі",q_number:"Торти-цифри",q_bento:"Бенто",q_desserts:"Десерти",q_jelly:"Фрукти в желе",q_flowers:"З живими квітами",q_berries:"З ягодами",q_darkgold:"Чорний із золотом",q_humor:"З гумором",q_bears:"Ведмедики",q_winter:"Новий рік",
 feat_island_t:"Торт-острів",feat_island_d:"Наш головний хіт: море з желе, скелі, хвилі та «мох». Усередині — шоколад, карамель і горіхи.",feat_christ_t:"Хрестини",feat_christ_d:"Крила ангела, хрестик, ніжний крем — та ім'я малюка.",feat_bento_t:"Бенто",feat_bento_d:"Міні-торт 400 г із написом — подарунок, який запам'ятають.",feat_desserts_t:"Десерти",feat_desserts_d:"Капкейки, трайфли, міні-тарти — від 6 штук.",feat_go:"Дивитися",
 fl_eyebrow:"Начинки",fl_title:"Що всередині",fl_sub:"Будь-який дизайн можна зробити з будь-якою начинкою. Три фірмові — авторські рецепти Анжеліки.",fl_sig:"Фірмова",
 bake_t:"Незабаром: свіжа випічка",bake_d:"Булочки, пиріжки та круасани — солодкі й солоні, з начинкою. Те, чого так бракує на узбережжі.",bake_btn:"Хочу скуштувати першим",bake_msg:"Вітаю! Повідомте, будь ласка, коли з'являться булочки, пиріжки й круасани — хочу скуштувати.",
 t_num_berry:"Цифра в ягодах",t_num_flowers:"Цифра в квітах",t_num_meringue:"Цифра з безе",t_num_choc:"Шоколадна цифра",t_num_name:"Цифра з ім'ям",t_honey_jasmine:"Медовик із жасмином",t_jelly_sea:"Морський желейний",t_jelly_fruit:"Фрукти в желе",t_island:"Торт-острів",t_island_forest:"Лісовий острів",t_mini_set:"Набір міні-тортиків",t_heart_vintage:"Вінтажне серце",t_black_berries:"Чорний з ягодами",t_white_rasp:"Білий з малиною",t_choc_drip_berries:"Шоколадні патьоки та ягоди",t_white_gold:"Біле золото",t_black_gold:"Чорне золото",t_drip_sweets:"Дрип із солодощами",t_bunny:"Зайчик",t_meringue_cloud:"Хмара безе",t_butterflies:"Метелики",t_silhouette:"Леді на торті",t_quote:"Торт із цитатою",t_wizard:"Школа чарівництва",t_minnie:"Мишка з бантом",t_flowers_white:"Білий з квітами",t_happy_spheres:"Кулі та привітання",t_navy_velvet:"Синій велюр",t_wedding_mono:"Весільна монограма",t_baby_metrics:"Метрика малюка",t_grandpa:"Для дідуся",t_grandma:"Для бабусі",t_space:"Космос",t_pixel:"Піксельний світ",t_isomalt:"Кришталевий",t_baby_gentle:"Ніжний для малюка",t_witch:"Дівчинка в чорному",t_peonies:"Півонії",t_friend:"Для друга",t_bento_set:"Бенто та капкейки",t_strawberry:"Полуничний",t_cupcakes:"Капкейки",t_doll:"Лялька та пончики",t_bears:"Ведмедики",t_teen_portrait:"Портрет іменинниці",t_bento_duo:"Пара бенто",t_peach_roses:"Персикові троянди",t_pomegranate:"Гранатовий",t_cosmetics:"Б'юті-торт",t_dreams:"Мрії збуваються",t_bento:"Бенто з написом",t_unicorn:"Єдиноріг",t_cartoon:"Мультяшний",t_two_tier:"Дворівневий",t_sphere:"Торт-куля",t_half_year:"Пів рочку",t_rainbow:"Веселка",t_lavender:"Лаванда",t_choc_flower:"Шоколадна квітка",t_money:"Грошовий",t_nautical:"Морська подорож",t_profession:"За професією",t_wedding_tiers:"Весільний ярусний",t_flowers_bright:"Яскраві квіти",t_mom:"Для мами",t_trifle:"Десерти в склянках",t_battle:"Королівська битва",t_black_silver:"Чорне срібло",t_christening:"Хрестини",t_social:"Соцмережі",t_minimal:"Мінімалізм",t_puppies:"Цуценята-рятівники",t_cheesecake:"Чизкейк",t_for_dad:"Для тата",t_crew:"Космічна команда",t_superhero:"Супергерой",t_boss:"Маленький бос",t_baby_first:"Перший рочок",t_winter:"Сніговик",t_berry_wreath:"Ягідний вінок",t_mini_tarts:"Міні-тарти",t_dad_hero:"Тато-герой",t_macaron_drip:"Макарони та патьоки",t_galaxy:"Галактика",t_gender:"Хлопчик чи дівчинка?",t_halloween:"Гелловін",t_tie:"Краватка",t_tractor:"Трактор",t_ladybug:"Сонечко",t_cat:"Котик",t_roses_pink:"Рожеві троянди",t_football:"Футбол",t_car:"Автомобіль",t_fishing:"Риболовля",
 k_berries:"свіжі ягоди",k_raspberries:"малина",k_strawberries:"полуниця",k_blueberries:"лохина",k_blackberries:"ожина",k_cherries:"черешня",k_pomegranate:"зерна граната",k_currant:"червона смородина",k_citrus:"скибочки цитрусів",k_kiwi:"ківі",k_fruits:"свіжі фрукти",k_jelly:"прозоре желе",k_jelly_sea:"желейне море",k_waves:"кремові хвилі",k_moss:"їстівний «мох»",k_rocks:"шоколадні скелі",k_lagoon:"лагуна з желе",k_macarons:"макарон",k_meringue:"безе",k_lollipops:"карамельні льодяники",k_cream_roses:"кремові троянди",k_flowers:"живі квіти",k_roses:"живі троянди",k_peonies:"живі півонії",k_choc_flower:"квітка з шоколаду",k_figure:"фігурка ручної роботи",k_bear:"ведмедик ручної роботи",k_gingerbread:"розписний пряник",k_print:"їстівна картинка",k_inscription:"напис",k_choc_letters:"шоколадні літери",k_number:"цифра",k_topper:"топер",k_gold_spheres:"золоті сфери",k_silver_spheres:"срібні сфери",k_spheres:"шоколадні кулі",k_gold_leaf:"сусальне золото",k_choc_drip:"шоколадні патьоки",k_color_drip:"кольорові патьоки",k_oreo:"печиво",k_choc_bars:"шоколадні батончики",k_isomalt:"прозорий ізомальт",k_butterflies:"метелики",k_stars:"зірки",k_clouds:"хмарки",k_pearls:"цукрові перлини",k_greens:"зелень",k_velour:"велюр",k_metrics:"метрика малюка",k_wings:"крила ангела",k_cross:"хрестик",k_bills:"їстівні купюри",k_choc_sails:"шоколадні вітрила",k_sprinkles:"посипка",k_hearts:"сердечка",k_bow:"бант",k_toy:"іграшка-топер",k_cupcakes:"капкейки",k_vintage:"вінтажний візерунок",k_coconut:"кокосові кульки",k_ombre:"омбре",k_marble:"мармуровий крем",k_sphere_shape:"форма кулі",k_silhouette:"силует",k_cookies:"печиво з картинкою",k_name:"ім'я",k_crown:"корона",k_shells:"шоколадні мушлі",k_drawing:"малюнок кремом",k_garland:"гірлянда-прапорці",k_feathers:"пір'я",k_candles:"свічки",k_wheat:"колоски",k_cat_face:"мордочка котика",k_unicorn:"ріг єдинорога",k_rainbow:"веселка",k_ship:"кораблик і маяк",k_sparkler:"бенгальський вогонь",k_lavender:"лавандовий крем",k_tie:"краватка",k_fish:"рибка ручної роботи",k_candies:"драже",k_cream:"ніжний крем",k_galaxy:"розпис «галактика»",k_cake_pops:"кейк-попси",
 fl_berry:"Fresh Berry",fl_berry_l:"бісквіт з малиною · чорнично-м'ятне кремю · мус на сметані з лимоном",fl_mcflurry:"Макфлурі",fl_mcflurry_l:"брауні · полуничне желе · полуничний мус · ванільний мус",fl_peanut:"Арахісовий лате",fl_peanut_l:"шоколадний бісквіт · хрусткий шар з арахісом і молочним шоколадом · кавове кремю · кавовий мус",
 fl_island:"Острів",fl_island_l:"шоколадний бісквіт · солона карамель · обсмажений фундук · шоколадний крем",fl_honey:"Медовик",fl_honey_l:"тонкі медові коржі · сметанний крем · крапля гречаного меду",fl_napoleon:"Цифра «Наполеон»",fl_napoleon_l:"пісочні коржі · заварний крем-пломбір · ягоди на вибір",fl_lemon:"Лимон і мак",fl_lemon_l:"лимонний бісквіт з маком · лимонний курд · крем на маскарпоне",fl_vanilla_straw:"Полуниця з вершками",fl_vanilla_straw_l:"ванільний бісквіт · полуничний конфітюр · вершковий крем",fl_cherry_choc:"Вишня та шоколад",fl_cherry_choc_l:"шоколадний бісквіт · пряна вишня · шоколадний крем-чиз",fl_caramel:"Солона карамель",fl_caramel_l:"карамельний бісквіт · домашня солона карамель · карамельний крем",fl_pistachio:"Фісташка та малина",fl_pistachio_l:"фісташковий бісквіт · малинове конфі · фісташковий крем",fl_mango:"Манго та маракуя",fl_mango_l:"ванільний бісквіт · кремю манго-маракуя · вершковий крем-чиз",fl_redvelvet:"Червоний оксамит",fl_redvelvet_l:"оксамитовий бісквіт з какао · крем-чиз · ягоди",fl_choc_nut:"Шоколад і горіх",fl_choc_nut_l:"шоколадний бісквіт · горіхова нуга · шоколадний ганаш",fl_jelly:"Фрукти в желе",fl_jelly_l:"ніжний бісквіт · свіжі фрукти в прозорому желе · сметанний крем",fl_cheese:"Чизкейк",fl_cheese_l:"хрустка пісочна основа · вершковий сир · свіжі ягоди"}
};

/* ---------- Данные ---------- */
const CATALOG = CAT_RAW.trim().split("\n").map(line=>{ const [id,type,tags,title,num,decor,flavor,kw]=line.split("|");
  const tg=tags.split(" ").filter(Boolean);
  return {id,type,tags:tg,title,num,decor:decor?decor.split(","):[],flavor,kw:kw||"",photo:`img/catalog/${id}.jpg`,
    has:(...a)=>a.some(x=>tg.includes(x))}; });

/* ===== Новые начинки (24.11.2026) и обновлённый текст раздела «Что внутри» ===== */
FLAVORS.unshift(
  {id:"fl_bueno",c:"#b07a46",isNew:1},
  {id:"fl_snickers",c:"#6b3f22"},
  {id:"fl_raffaello",c:"#efe6d6"}
);
const FL_NEW = {
 ru:{fl_sub:"Любой дизайн можно собрать с любой начинкой: от любимой классики до фирменных рецептов Анжелики (они отмечены значком). Коллекция постоянно пополняется. Не нашли свой вкус? Напишите, обсудим.",fl_new:"Новинка",
  fl_bueno:"Буэно",fl_bueno_l:"ореховый бисквит · крем на молочном шоколаде с фундучной пастой · хрустящая вафельная прослойка · дроблёный фундук",
  fl_snickers:"Сникерс",fl_snickers_l:"шоколадный бисквит · солёная карамель · жареный арахис · сливочно-нугатовый крем · шоколадный ганаш",
  fl_raffaello:"Рафаэлло",fl_raffaello_l:"ванильный бисквит с кокосом · крем на белом шоколаде с кокосом · миндаль · кокосовая стружка"},
 en:{fl_sub:"Any design can be made with any filling: from much-loved classics to Angelika's signature recipes (marked with a badge). New flavours keep coming. Can't see yours? Message us.",fl_new:"New",
  fl_bueno:"Bueno",fl_bueno_l:"hazelnut sponge · milk chocolate and hazelnut cream · crunchy wafer layer · chopped hazelnuts",
  fl_snickers:"Snickers",fl_snickers_l:"chocolate sponge · salted caramel · roasted peanuts · creamy nougat cream · chocolate ganache",
  fl_raffaello:"Raffaello",fl_raffaello_l:"vanilla coconut sponge · white chocolate coconut cream · almonds · coconut flakes"},
 bg:{fl_sub:"Всеки дизайн може да е с всяка плънка: от любимата класика до авторските рецепти на Анжелика (отбелязани със знак). Колекцията постоянно расте. Не виждате своя вкус? Пишете ни.",fl_new:"Ново",
  fl_bueno:"Буено",fl_bueno_l:"блат с лешници · крем от млечен шоколад с лешников пастет · хрупкав вафлен слой · натрошени лешници",
  fl_snickers:"Сникърс",fl_snickers_l:"шоколадов блат · солен карамел · печени фъстъци · кремообразен нуга крем · шоколадов ганаш",
  fl_raffaello:"Рафаело",fl_raffaello_l:"ванилов блат с кокос · крем от бял шоколад с кокос · бадеми · кокосови стърготини"},
 ch:{fl_sub:"Jedes Design mit jeder Füllung: von beliebten Klassikern bis zu Angelikas Hausrezepten (mit Abzeichen markiert). Es kommen laufend neue dazu. Ihr Geschmack fehlt? Schreiben Sie uns.",fl_new:"Neu",
  fl_bueno:"Bueno",fl_bueno_l:"Haselnussbiskuit · Milchschokoladen-Haselnuss-Creme · knusprige Waffelschicht · gehackte Haselnüsse",
  fl_snickers:"Snickers",fl_snickers_l:"Schokoladenbiskuit · Salzkaramell · geröstete Erdnüsse · Nougatcreme · Schokoladenganache",
  fl_raffaello:"Raffaello",fl_raffaello_l:"Vanille-Kokos-Biskuit · Kokoscreme mit weisser Schokolade · Mandeln · Kokosraspeln"},
 it:{fl_sub:"Ogni design con qualsiasi ripieno: dai grandi classici alle ricette d'autore di Angelika (segnate da un'etichetta). La collezione cresce di continuo. Non trovi il tuo gusto? Scrivici.",fl_new:"Novità",
  fl_bueno:"Bueno",fl_bueno_l:"pan di spagna alle nocciole · crema al cioccolato al latte e nocciole · strato croccante di wafer · granella di nocciole",
  fl_snickers:"Snickers",fl_snickers_l:"pan di spagna al cioccolato · caramello salato · arachidi tostate · crema al torrone · ganache al cioccolato",
  fl_raffaello:"Raffaello",fl_raffaello_l:"pan di spagna vaniglia e cocco · crema al cioccolato bianco e cocco · mandorle · scaglie di cocco"},
 ua:{fl_sub:"Будь-який дизайн можна зробити з будь-якою начинкою: від улюбленої класики до фірмових рецептів Анжеліки (вони позначені значком). Колекція постійно поповнюється. Не знайшли свій смак? Напишіть, обговоримо.",fl_new:"Новинка",
  fl_bueno:"Буено",fl_bueno_l:"горіховий бісквіт · крем на молочному шоколаді з фундуковою пастою · хрустка вафельна прошарка · подрібнений фундук",
  fl_snickers:"Снікерс",fl_snickers_l:"шоколадний бісквіт · солона карамель · смажений арахіс · вершково-нугатовий крем · шоколадний ганаш",
  fl_raffaello:"Рафаелло",fl_raffaello_l:"ванільний бісквіт з кокосом · крем на білому шоколаді з кокосом · мигдаль · кокосова стружка"}
};
Object.keys(FL_NEW).forEach(l=>{ if(CAT_I18N[l]) Object.assign(CAT_I18N[l],FL_NEW[l]); });

/* ===== Фирменные и обычные начинки (24.11.2026) =====
   «Остров» — это торт, а чизкейк бывает разных вкусов: в списке начинок их нет, начинку для них выбирает клиент. */
const FL_REMOVE = ["fl_island","fl_cheese"];
for (let i = FLAVORS.length - 1; i >= 0; i--) if (FL_REMOVE.includes(FLAVORS[i].id)) FLAVORS.splice(i, 1);
const FL_SIGNATURE = ["fl_bueno","fl_snickers","fl_raffaello","fl_berry","fl_mcflurry","fl_peanut","fl_lemon","fl_jelly"];
FLAVORS.forEach(f => { f.sig = FL_SIGNATURE.includes(f.id) ? 1 : 0; });
FLAVORS.sort((a, b) => b.sig - a.sig);                      /* сначала фирменные, потом классика */
CATALOG.forEach(p => { if (FL_REMOVE.includes(p.flavor)) p.flavor = ""; });