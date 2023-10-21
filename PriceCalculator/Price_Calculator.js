    
        //scroll to bottom
        const backToBottomButton = document.querySelector(".back-to-bottom");
        const scrollContainer = () => {
            return document.documentElement || document.body;
          };
          
          document.addEventListener("scroll", () => {
            
            if (scrollContainer().scrollTop < scrollContainer().scrollHeight - 2000) {
                backToBottomButton.classList.remove("hidden")
            } else {
                backToBottomButton.classList.add("hidden")
            }
          })

          
        const goToBottom = () => {

            document.body.scrollIntoView({
                block: "end", 
                inline: "nearest",
                behavior: "smooth",
              });
            commitFood();
          };
          backToBottomButton.addEventListener("click", goToBottom)


        //cookie

        function SetCookie(name,value)
        {
            var Days = 30; 
            var exp  = new Date();
            exp.setTime(exp.getTime() + 100000000);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        }
        
        function getCookie(name)  
        {
            var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
             if(arr != null) return unescape(arr[2]); return null;
        }
        
        var gfid        =   "123456789"
        var gencode     =   getCookie("Price_Calculator")
        if (gencode == null)
        {
            gencode = ""
        }
        
        var fstl =  gencode.split("#")
        
function commitFood()
        {
            
            var total = 0
            var fns   = new Array()
            var nums  = new Array()
            var encode= ""
            var totalPrice = 0        
            for (idx in foods)
            {
                
                var ff = document.getElementById(foods[idx].tag)
                var num = parseInt(ff.value)
                var num2 = parseInt(ff.value*foods[idx].price)
                
                total+=num;
                totalPrice+=num2;
                // console.log(foods[idx].tag,ff.value*foods[idx].price,total)
                if (num > 0)
                {
                    fns.push(foods[idx].en)
                    nums.push(num)
                    total   =   total + num
                    totalPrice = totalPrice + num2
                    
                    encode  =   encode + foods[idx].tag + "#" + num + "#"
                }
                
            }

            var mult=document.getElementById("mult").value;
            var dis="";

            /* 
            

    for (idx in fns)
    {      
        dis = dis +  "1/" + ratioArray[idx] + " " +fns[idx] + " = " + nums[idx] + "\n";        
    }
    var x = dis;
var totalBems= 0
var list = x.split("\n");
list.pop();
    for( i=0; i<list.length;i++){
        console.log(list[i]);
        totalBems = totalBems + calculate(list[i]);
        }


    dis = dis + "Total Foods= " + total/2 + "\n";
    dis = dis + "Total Bems Required= " + totalBems;
    document.getElementById("display").innerHTML = dis;
    
    SetCookie("Price_Calculator", encode)
    //document.write(encode)
            */







    
            
            /*
            var fid     =   document.getElementById("fid")
            fid.value   =   gfid
            var fid     =   document.getElementById("fencode")
            fencode.value   =   encode
            
            var form     =   document.getElementById("foodForm")
            form.submit()
            */
        //    document.write("<body style=" + "background-image:url('https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png');" + ">")
        //     document.write("<div class=" + "container" + ">")
            for (idx in fns)
            {
               dis = dis + " &#9679; " +  fns[idx] + " = " + nums[idx] + "\n";   
                // document.write("<h4 style= " + "padding-top:1px;padding-left:48px;" + ">" +fns[idx] + " = " + nums[idx] + "</h4>")
            }

            dis = dis + " \n";
            dis = dis + "مجموع المنتجات = " + total/2 + "\n";
            dis = dis + "مجموع السعر العادي = " + totalPrice/2 + "\n";
            dis = dis + "مجموع السعر ضرب  " + mult + " = " + (totalPrice/2)*mult + "\n";
            dis = dis + "مجموع البطانيات المطلوبة = " + ((totalPrice*mult/2)/1098).toFixed(2)+ "\n";
            dis = dis + "مجموع الخواتم المطلوبة = " + ((totalPrice*mult/2)/824).toFixed(2)+ "\n";
            document.getElementById("display").innerHTML = dis;
            SetCookie("Price_Calculator", encode)
            //document.write(encode)
        }
        
        
        function resetFood()
        {
            for (idx in foods)
            {
                var ff = document.getElementById(foods[idx].tag)
                ff.value    =   "0"
            }
            document.getElementById("display").innerHTML = "";
            onFoodChange()
        }
        
      
    
            function Food(en, lvl, price, fn, imgid)
            {
                this.fn     =   fn
                this.en     =   en
                this.lvl    =   lvl
                this.price  =   price
                this.imgid  =   imgid
                this.tag    =   en.replace(/ /g , "");
                this.bc     =   ""
                        for (var i = 1; i <= (22 - this.en.length); i++) 
                {
                    this.bc =   this.bc + "&nbsp;"
                }
            }
            
            var foods   =   new Array
            (
        

                new Food("فأس", 5, 36 , "الأدوات", "Axes"),
                new Food("منشار", 5, 54 , "الأدوات", "Saw"),
                new Food("ديناميت", 5, 25 , "الأدوات", "Dynamite"),
                new Food("برميل متفجرات", 5, 72 , "الأدوات", "TNT_Barrel"),
                new Food("مجرفة", 5, 108 , "الأدوات", "Shovel"),
                new Food("معول", 34, 126 , "الأدوات", "Pickaxe"),
        
                new Food("غسول الليمون", 84, 403 , "كشك الحمام", "Lemon_Lotion"),
                new Food("صابون العسل", 84, 327 , "كشك الحمام", "Honey_Soap"),
                new Food("صابون التقشير", 93, 363 , "كشك الحمام", "Exfoliating_Soap"),
                new Food("قناع الوجه بالعسل", 99, 320 , "كشك الحمام", "Honey_Face_Mask"),
                
                new Food("خبر", 2, 21 , "المخبز", "Bread"),
                new Food("كعكة صغيرة", 10, 104 , "المخبز", "Cookie"),
                new Food("خبز الذرة", 7, 72 , "المخبز", "Corn_Bread"),
                new Food("بيتزا", 33, 190 , "المخبز", "Pizza"),
                new Food("بيتزا متبلة", 37, 226 , "المخبز", "Spicy_Pizza"),
                new Food("كعكة التوت", 19, 140 , "المخبز", "Raspberry_Muffin"),
                new Food("كعكة توت العليق", 26, 226 , "المخبز", "Blackberry_Muffin"),
                new Food("خبز البطاطس", 39, 284 , "المخبز", "Potato_Bread"),
                new Food("بيتزا فروتي دي ماري", 45, 403 , "المخبز", "Frutti_di_Mare_Pizza"),
                new Food("خبز الموز", 91, 424 , "المخبز", "Banana_Bread"),
                new Food("كوكي الزنجبيل", 86, 273 , "المخبز", "Gingerbread_Cookie"),
                new Food("معكرون", 101, 421 , "المخبز", "Macaroon"),
        
                new Food("فطيرة مقلية", 9, 108 , "شواية لحم", "Pancake"),
                new Food("لحم مقدد وبيض", 11, 201 ,  "شواية لحم", "Bacon_and_Eggs"),
                new Food("هامبورجر", 18, 180 ,  "شواية لحم", "Hamburger"),
                new Food("طماطم مشوية", 30, 118 ,  "شواية لحم", "Roasted_Tomatoes"),
                new Food("بطاطس مخبوزة", 35, 298 ,  "شواية لحم", "Baked_Potato"),
                new Food("برجر سمك", 27, 226 ,  "شواية لحم", "Fish_burgers"),
                new Food("سمك ورقائق", 41, 244 ,  "شواية لحم", "Fish_and_Chips"),
                new Food("سيخ سرطان البحر", 48, 417 ,  "شواية لحم", "Lobster_Skewer"),
                new Food("بصل مشوي", 68, 190 ,  "شواية لحم", "Grilled_Onion"),
                new Food("شطائر الموز", 94, 352 ,  "شواية لحم", "Banana_Pancakes"),
                new Food("باذنجان مشوي", 90, 324 ,  "شواية لحم", "Grilled_Eggplant"),
                new Food("سيخ سمك", 96, 176 ,  "شواية لحم", "Fish_Skewer"),
                new Food("خضروات مشتوية", 72, 198 ,  "شواية لحم", "Winter_Veggies"),
                new Food("خبز الثوم", 60, 198 ,  "شواية لحم", "Garlic_Bread"),
                new Food("فلفل محشو", 80, 352 ,  "شواية لحم", "Stuffed_Peppers"),
                
                new Food("كعكة الجبن", 24, 284 , "فرن كعك", "Cheese_cake"),
                new Food("كعكة الجزر", 21, 165 , "فرن كعك", "Carrot_Cake"),
                new Food("كعكة القشطة", 23, 219 , "فرن كعك", "Cream_Cake"),
                new Food("كعكة الشوكولاتة", 36, 320 , "فرن كعك", "Chocolate_Cake"),
                new Food("معمة الفراولة", 35, 316 , "فرن كعك", "Strawberry_Cake"),
                new Food("كعكة التوت الأحمر", 23, 255 , "فرن كعك", "Red_Berry_Cake"),
                new Food("كعكة بطاطس وجبن فيتا", 38, 309 , "فرن كعك", "Potato_Feta_Cake"),
                new Food("كعكة ليمون", 68, 896 , "فرن كعك", "Lemon_Cake"),
                new Food("كعكة التفاح والعسل", 42, 482 , "فرن كعك", "Honey_Apple_Cake"),
                new Food("كعكة فواكه", 89, 450 , "فرن كعك", "Fruit_Cake"),
                new Food("كعكة الأناناس", 65, 259 , "فرن كعك", "Pineapple_Cake"),
                new Food("كعكة مزينة", 54, 450 , "فرن كعك", "Fancy_Cake"),
                new Food("ملفوف الشوكولاتة", 95, 604 , "فرن كعك", "Chocolate_Roll"),
                
                new Food("شمعة فراولة", 48, 370 , "آلة صناعة الشمع ", "Strawberry_Candle"),
                new Food("شمعة توت", 52, 360 , "آلة صناعة الشمع ", "Raspberry_Candle"),
                new Food("شمعة ليمون", 72, 457 , "آلة صناعة الشمع ", "Lemon_Candle"),
                new Food(" شمعة متعددة الالوان", 84, 324 , "آلة صناعة الشمع ", "Colorful_Candles"),
                new Food("شمعة زهرية", 95, 442 , "آلة صناعة الشمع ", "Floral_Candle"),
                
                new Food("تفاحة الكراميل", 51, 255 , "ألة صناعة الحلوى", "Caramel_Apple"),
                new Food("حلوى الطوفي", 52, 176 , "ألة صناعة الحلوى", "Toffee"),
                new Food("شوكولاتة", 54, 460 , "ألة صناعة الحلوى", "Chocolate"),
                new Food("مصاصة", 57, 342 , "ألة صناعة الحلوى", "Lollipop"),
                new Food("حبوب حلوى الجيلي", 60, 684 , "ألة صناعة الحلوى", "Jelly_Beans"),
                new Food("حلوى القطن", 75, 226 , "ألة صناعة الحلوى", "Cotton_Candy"),
                new Food("فول سوداني بالعسل", 78, 270 , "ألة صناعة الحلوى", "Sesame_Brittle"),
                new Food("حلوى بالسمسم", 63, 468 , "ألة صناعة الحلوى", "Honey_Peanuts"),
                
                new Food("قهوة مركزة", 42, 248 , "كشك القهوة", "Espresso"),
                new Food("قهوة بالحليب", 43, 219 , "كشك القهوة", "Caffe_Latte"),
                new Food("قهوة موكا", 45, 291 , "كشك القهوة", "Caffe_Mocha"),
                new Food("موكا التوت", 46, 259 , "كشك القهوة", "Raspberry_Mocha"),
                new Food("شوكولاتة ساخنة", 47, 316 , "كشك القهوة", "Hot_Chocolate"),
                new Food("لاتيه الموز المثلج", 88, 277 , "كشك القهوة", "Iced_Banana_Latte"),
                new Food("لانيه الكراميل", 62, 345 , "كشك القهوة", "Caramel_Latte"),

                new Food("Plain Cupcake", 109, 280 , "Cupcake Maker", "Plain_Cupcake"),
                new Food("Guava Cupcake", 109, 583 , "Cupcake Maker", "Guava_Cupcake"),
                new Food("Tropical Cupcake", 112, 572 , "Cupcake Maker", "Tropical_Cupcake"),
                new Food("Cookie Cupcake", 114, 712 , "Cupcake Maker", "Cookie_Cupcake"),
                
                new Food("القشدة", 6, 50 , "معمل ألبان", "Cream"),
                new Food("الزبدة", 9, 82 , "معمل ألبان", "Butter"),
                new Food("الجبن", 12, 122 , "معمل ألبان", "Cheese"),
                new Food("جبن الماعز", 33, 162 , "معمل ألبان", "Goat_Cheese"),
                
                new Food("Bacon Fries", 87, 302 , "Deep Fryer", "Bacon_Fries"),
                new Food("Chili Poppers", 98, 406 , "Deep Fryer", "Chili_Poppers"),
                new Food("Hand Pies", 91, 295 , "Deep Fryer", "Hand_Pies"),
                new Food("Falafel", 98, 226 , "Deep Fryer", "Falafel"),
                new Food("Fried Candy Bar", 100, 658 , "Deep Fryer", "Fried_Candy_Bar"),
                new Food("Samosa", 103, 223 , "Deep Fryer", "Samosa"),
                
                new Food("دونت سادة", 76, 129 , "آلة صنع الدونت", "Plain_Donut"),
                new Food("دونت مرشوش", 79, 313 , "آلة صنع الدونت", "Sprinkled_Donut"),
                new Food("دونت مقرمش", 82, 594 , "آلة صنع الدونت", "Crunchy_Donut"),
                new Food("دونت بالكريمة", 86, 230 , "آلة صنع الدونت", "Cream_Donut"),
                new Food("دونت باللحم المقدد", 88, 388 , "آلة صنع الدونت", "Bacon_Donut"),
                new Food("دونت محشو", 93, 403 , "آلة صنع الدونت", "Filled_Donut"),
                
                new Food("فيليه سمك", 27, 54 , "صيد", "Fish_Fillet"),
                new Food("ذيل سرطان البحر", 44, 201 , "صيد", "Lobster_Tail"),
                new Food("ريش البط", 50, 140 , "صيد", "Duck_Feather"),
                
                new Food("باقة زهور روستيك", 49, 208 , "متجر زهور", "Rustic_Bouquet"),
                new Food("باقة زهور ساطعة", 65, 338 , "متجر زهور", "Bright_Bouquet"),
                new Food("باقة جميلة", 73, 500 , "متجر زهور", "Gracious_Bouquet"),
                new Food("باقة حلوى", 90, 554 , "متجر زهور", "Candy_Bouquet"),
                new Food("باقة أزهار عيد الميلاد", 92, 349 , "متجر زهور", "Birthday_Bouquet"),
                new Food("باقة زهور هادئة", 93, 298 , "متجر زهور", "Soft_Bouquet"),           
                new Food("Veggie Bouquet", 106, 352 , "متجر زهور", "Veggie_Bouquet"),
                
                
                
                new Food("فوندو الشوكولاتة", 81, 626 , "قدر الفوندو", "Chocolate_Fondue"),
                new Food("قوندو اللحم المقدد", 86, 507 , "قدر الفوندو", "Bacon_Fondue"),
                new Food("فوندو الجبن", 91, 493 , "قدر الفوندو", "Cheese_Fondue"),
                new Food("فوندو استوائي", 100, 417 , "قدر الفوندو", "Tropical_Fondue"),

                new Food("Rich Fudge", 99, 644 , "Fudge Shop", "Rich_Fudge"),
                new Food("Mint Fudge", 102, 522 , "Fudge Shop", "Mint_Fudge"),
                new Food("Chili Fudge", 104, 540 , "Fudge Shop", "Chili_Fudge"),
                new Food("Lemon Fudge", 108, 590 , "Fudge Shop", "Lemon_Fudge"),
                new Food("Peanut Fudge", 111, 1141 , "Fudge Shop", "Peanut_Fudge"),
                
                new Food("قبعة نسائية", 70, 468 , "آلة صناعة القبعات", "Cloche_Hat"),
                new Food("قبعة عالية", 72, 619 , "آلة صناعة القبعات", "Top_Hat"),
                new Food("قبعة شمس", 74, 558 , "آلة صناعة القبعات", "Sun_Hat"),
                new Food("تاج من الزهور", 86, 331 , "آلة صناعة القبعات", "Flower_Crown"),
                
                new Food("عسل", 39, 154 , "آلة استخراج العسل", "Honey"),
                new Food("شمع العسل", 48, 234 , "آلة استخراج العسل", "Beeswax"),
                
                new Food("نقانق", 75, 370 , "منصة النقانق", "Hot_Dog"),
                new Food("نقانق التوفو", 76, 367 , "منصة النقانق", "Tofu_Dog"),
                new Food("نقانق الذرة", 78, 529 , "منصة النقانق", "Corn_Dog"),
                new Food("نقانق البصل", 80, 306 , "منصة النقانق", "Onion_Dog"),
                
                new Food("Vanilla Ice Cream", 29, 172 , "Ice Cream Maker", "Vanilla_Ice_Cream"),
                new Food("Cherry Popsicle", 33, 352 , "Ice Cream Maker", "Cherry_Popsicle"),
                new Food("Strawberry Ice Cream", 34, 331 , "Ice Cream Maker", "Strawberry_Ice_Cream"),
                new Food("Chocolate Ice Cream", 39, 342 , "Ice Cream Maker", "Chocolate_Ice_Cream"),
                new Food("Orange Sorbet", 78, 399 , "Ice Cream Maker", "Orange_Sorbet"),
                new Food("Affogato", 78, 435 , "Ice Cream Maker", "Affogato"),
                new Food("Peach Ice Cream", 83, 450 , "Ice Cream Maker", "Peach_Ice_Cream"),
                new Food("Banana Split", 96, 403 , "Ice Cream Maker", "Banana_Split"),
                new Food("Mint Ice Cream", 85, 288 , "Ice Cream Maker", "Mint_Ice_Cream"),
                new Food("Sesame Ice Cream", 50, 176 , "Ice Cream Maker", "Sesame_Ice_Cream"),
                new Food("Peanut Butter Milkshake", 68, 619 , "Ice Cream Maker", "Peanut_Butter_Milkshake"),
                new Food("Coconut ice cream", 102, 320 , "Ice Cream Maker", "Coconut_Ice_Cream"),
                new Food("Fruit Sorbet", 106, 518 , "Ice Cream Maker", "Fruit_Sorbet"),
                
                new Food("مربى التفاح", 35, 219 , "آلة صناعة  المربى", "Apple_Jam"),
                new Food("مربى التوت", 36, 252 , "آلة صناعة  المربى", "Raspberry_Jam"),
                new Food("مربى توت العليق", 37, 388 , "آلة صناعة  المربى", "Blackberry_Jam"),
                new Food("مربى الكرز", 38, 334 , "آلة صناعة  المربى", "Cherry_Jam"),
                new Food("مربى الفراولة", 50, 270 , "آلة صناعة  المربى", "Strawberry_Jam"),
                new Food("مربى الحمضيات", 74, 457 , "آلة صناعة  المربى", "Marmalade"),
                new Food("مربى الخوخ", 79, 464 , "آلة صناعة  المربى", "Peach_Jam"),
                new Food("مربى العنب", 85, 162 , "آلة صناعة  المربى", "Grape_Jam"),
                new Food("مربى البرقوق", 94, 385 , "آلة صناعة  المربى", "Plum_Jam"),
                new Food("مربى فاكهة زهرة الآلام", 96, 118 , "آلة صناعة  المربى", "Passion_Fruit_Jam"),
                
                new Food("سوار", 38, 514 , "صائغ", "Bracelet"),
                new Food("قلادة", 39, 727 , "صائغ", "Necklace"),
                new Food("خاتم ماسي", 40, 824 , "صائغ", "Diamond_Ring"),
                new Food("سوار حديدي", 41, 658 , "صائغ", "Iron_Bracelet"),
                new Food("دلاية الوردة", 98, 698 , "صائغ", "Flower_Pendant"),
                
                new Food("Carrot Juice", 26, 46 , "Juice Press", "Carrot_Juice"),
                new Food("Tomato Juice", 31, 162 , "Juice Press", "Tomato_Juice"),
                new Food("Apple Juice", 28, 129 , "Juice Press", "Apple_Juice"),
                new Food("Cherry Juice", 30, 216 , "Juice Press", "Cherry_Juice"),
                new Food("Berry Juice", 31, 205 , "Juice Press", "Berry_Juice"),
                new Food("Orange Juice", 71, 234 , "Juice Press", "Orange_Juice"),
                new Food("Grape Juice", 84, 104 , "Juice Press", "Grape_Juice"),
                new Food("Passion Fruit Juice", 88, 64 , "Juice Press", "Passion_Fruit_Juice"),
                new Food("Watermelon Juice", 92, 108 , "Juice Press", "Watermelon_Juice"),
                new Food("Mango Juice", 97, 230 , "Juice Press", "Mango_Juice"),
                new Food("Pineapple Juice", 52, 68 , "Juice Press", "Pineapple_Juice"),
                new Food("Guava Juice", 104, 252 , "Juice Press", "Guava_Juice"),
                
                new Food("سترة", 17, 151 , "منسج", "Sweater"),
                new Food("قبعة صوف زرقاء", 19, 111 , "منسج", "Blue_Woolly_Hat"),
                new Food("سترة زرقاء", 20, 208 , "منسج", "Blue_Sweater"),
                new Food("الوشاح الأحمر", 48, 288 , "منسج", "Red_Scarf"),
                new Food("نسيج القطن", 18, 108 , "منسج", "Cotton_Fabric"),
                new Food("وشاح من الزهور", 71, 295 , "منسج", "Flower_Shawl"),
                
                new Food("Gnocchi", 72, 475 , "Pasta Kitchen", "Gnocchi"),
                new Food("Veggie Lasagna", 74, 532 , "Pasta Kitchen", "Veggie_Lasagna"),
                new Food("Lobster Pasta", 79, 637 , "Pasta Kitchen", "Lobster_Pasta"),
                new Food("Pasta Carbonara", 83, 410 , "Pasta Kitchen", "Pasta_Carbonara"),
                new Food("Spicy Pasta", 87, 576 , "Pasta Kitchen", "Spicy_Pasta"),
                new Food("Broccoli Pasta", 83, 345 , "Pasta Kitchen", "Broccoli_Pasta"),
                new Food("Mushroom Pasta", 101, 280 , "Pasta Kitchen", "Mushroom_Pasta"),
                
                new Food("باستا طازجة", 67, 43 , "ألة الباستا", "Fresh_Pasta"),
                new Food("شعرية الأرز", 73, 100 , "ألة الباستا", "Rice_Noodles"),
                
                new Food("فطيرة الجزر", 14, 82 , "فرن الفطائر", "Carrot_Pie"),
                new Food("فطيرة اللحم المقدد", 18, 219 , "فرن الفطائر", "Bacon_Pie"),
                new Food("فطيرة القرع", 15, 158 , "فرن الفطائر", "Pumpkin_Pie"),
                new Food("فطيرة التفاح", 28, 270 , "فرن الفطائر", "Apple_Pie"),
                new Food("فطيرة جبن الفيتا", 34, 223 , "فرن الفطائر", "Feta_Pie"),
                new Food("كسرولة", 36, 367 , "فرن الفطائر", "Casserole"),
                new Food("فطيرة الراعي", 39, 280 , "فرن الفطائر", "Shepherds_Pie"),
                new Food("فطيرة السمك", 28, 226 , "فرن الفطائر", "Fish_Pie"),
                new Food("فطيرة ليمون", 67, 446 , "فرن الفطائر", "Lemon_Pie"),
                new Food("فطيرة الخوخ", 76, 435 , "فرن الفطائر", "Peach_Tart"),
                new Food("فطيرة فاكهة زهرة الألام", 92, 111 , "فرن الفطائر", "Passion_Fruit_Pie"),
                new Food("فطيرة الكرنب والفطر", 97, 162 , "فرن الفطائر", "Mushroom_Pot_Pie"),
                new Food("باذنجان بالجبن", 99, 442 , "فرن الفطائر", "Eggplant_Parmesan"),
                new Food("فطيرة الشوكولاتة", 65, 514 , "فرن الفطائر", "Chocolate_Pie"),
                
                new Food("فشار", 8, 32 , "ألة فشار", "Popcorn"),
                new Food("فشار بالزبدة", 16, 126 , "ألة فشار", "Buttered_Popcorn"),
                new Food("فشار حار", 25, 122 , "ألة فشار", "Chili_Popcorn"),
                new Food("فشار الشوكولاتة", 44, 248 , "ألة فشار", "Chocolate_Popcorn"),
                new Food("فشار عسل", 40, 360 , "ألة فشار", "Honey_Popcorn"),
                new Food("مقرمشات مشكلة", 64, 309 , "ألة فشار", "Snack_Mix"),

                new Food("إبريق شاي", 94, 219 , "مشغل صناعة الفخار", "Tea_Pot"),
                new Food("نبتة في أصيص", 96, 151 , "مشغل صناعة الفخار", "Potted_Plant"),
                new Food("كوب فخار", 99, 212 , "مشغل صناعة الفخار", "Clay_Mug"),

                new Food("Pickles", 91, 270 , "Preservation Station", "Pickles"),
                new Food("Canned fish", 95, 471 , "Preservation Station", "Canned_Fish"),
                new Food("Kimchi", 98, 219 , "Preservation Station", "Kimchi"),
                new Food("Dried fruit", 102, 266 , "Preservation Station", "Dried_Fruit"),
                new Food("Guava Compote", 104, 421 , "Preservation Station", "Guava_Compote"),
                
                new Food("سلاطة الفيتا", 58, 745 , "قسم السلاطة", "Feta_Salad"),
                new Food("سلاطى لحم وخضروات", 62, 723 , "قسم السلاطة", "BLT_Salad"),
                new Food("سلاطة الأطعمة البحرية", 64, 763 , "قسم السلاطة", "Seafood_Salad"),
                new Food("سلاطة الباستا", 67, 759 , "قسم السلاطة", "Pasta_Salad"),
                new Food("سلاطة الفواكة", 82, 597 , "قسم السلاطة", "Fruit_Salad"),
                new Food("سلاطة الصيف", 84, 554 , "قسم السلاطة", "Summer_Salad"),
                new Food("لفائف سمر رولز", 78, 316 , "قسم السلاطة", "Summer_Rolls"),
                new Food("سلطة الكرنب", 75, 468 , "قسم السلاطة", "Coleslaw"),
                new Food("طبق خضروات", 74, 266 , "قسم السلاطة", "Veggie_Platter"),
                new Food("سلطة الفطر", 89, 216 , "قسم السلاطة", "Mushroom_Salad"),
                new Food("سلطة البنجر", 76, 234 , "قسم السلاطة", "Beetroot_Salad"),
                
                new Food("Bacon Toast", 65, 648 , "Sandwich Bar", "Bacon_Toast"),
                new Food("Veggie Bagel", 61, 532 , "Sandwich Bar", "Veggie_Bagel"),
                new Food("Egg Sandwich", 66, 583 , "Sandwich Bar", "Egg_Sandwich"),
                new Food("Honey Toast", 69, 255 , "Sandwich Bar", "Honey_Toast"),
                new Food("Goat Cheese Toast", 92, 302 , "Sandwich Bar", "Goat_Cheese_Toast"),
                new Food("Onion Melt", 84, 471 , "Sandwich Bar", "Onion_Melt"),
                new Food("Cucumber Sandwich", 79, 464 , "Sandwich Bar", "Cucumber_Sandwich"),
                new Food("Peanut Butter and Jelly Sandwich", 71, 601 , "Sandwich Bar", "Peanut_Butter_and_Jelly_Sandwich"),
                new Food("Hummus Wrap", 109, 374 , "Sandwich Bar", "Hummus_Wrap"), 
                
                new Food("صلصة صويا", 54, 154 , "آلة صناعة الصلصة", "Soy_Sauce"),
                new Food("زيت زيتون", 60, 277 , "آلة صناعة الصلصة", "Olive_Oil"),
                new Food("مايونيز", 62, 367 , "آلة صناعة الصلصة", "Mayonnaise"),
                new Food("ليمون متخثر", 66, 378 , "آلة صناعة الصلصة", "Lemon_Curd"),
                new Food("صلصة طماطم", 69, 230 , "آلة صناعة الصلصة", "Tomato_Sauce"),
                new Food("صلصة", 77, 252 , "آلة صناعة الصلصة", "Salsa"),
                new Food("زيت زيتون", 62, 468 , "آلة صناعة الصلصة", "Olive_Dip"),
                new Food("هريسة حمص", 95, 277 , "آلة صناعة الصلصة", "Hummus"),
                new Food("صلصة فاكهة الألام", 100, 288 , "آلة صناعة الصلصة", "Tart_Dressing"),

                
                
                new Food("قميص قطني", 19, 241 , "ألة الحياكة", "Cotton_Shirt"),
                new Food("سروال صوف", 21, 309 , "ألة الحياكة", "Wooly_Chaps"),
                new Food("فستان بنفسجي", 25, 327 , "ألة الحياكة", "Violet_Dress"),
                new Food("وسادة", 51, 676 , "ألة الحياكة", "Pillow"),
                new Food("بطانية", 59, 1098 , "ألة الحياكة", "Blanket"),
                
                new Food("سبيكة فضة", 24, 147 , "المصهر", "Silver_Bar"),
                new Food("سبيكة ذهب", 25, 180 , "المصهر", "Gold_Bar"),
                new Food("سبيكة بلاتين", 25, 205 , "المصهر", "Platinum_Bar"),
                new Food("فحم مكرر", 33, 108 , "المصهر", "Refined_Coal"),
                new Food("سبيكة حديد", 34, 129 , "المصهر", "Iron_Bar"),
                
                new Food("Green Smoothie", 66, 320 , "Smoothie Mixer", "Green_Smoothie"),
                new Food("Berry Smoothie", 64, 547 , "Smoothie Mixer", "Berry_Smoothie"),
                new Food("Yogurt Smoothie", 70, 349 , "Smoothie Mixer", "Yogurt_Smoothie"),
                new Food("Mixed Smoothie", 88, 504 , "Smoothie Mixer", "Mixed_Smoothie"),
                new Food("Cocoa Smoothie", 100, 511 , "Smoothie Mixer", "Cocoa_Smoothie"),
                new Food("Plum Smoothie", 102, 522 , "Smoothie Mixer", "Plum_Smoothie"),
                new Food("Cucumber Smoothie", 70, 266 , "Smoothie Mixer", "Cucumber_Smoothie"),
                new Food("Black Sesame Smoothie", 93, 313 , "Smoothie Mixer", "Black_Sesame_Smoothie"),
                new Food("Tropical Smoothie", 104, 475 , "Smoothie Mixer", "Tropical_Smoothie"),
                
                new Food("حساء سرطان البحر", 46, 612 , "مطبخ الحساء", "Lobster_Soup"),
                new Food("حساء الطماطم", 47, 478 , "مطبخ الحساء", "Tomato_Soup"),
                new Food("حساء السمك", 53, 298 , "مطبخ الحساء", "Fish_Soup"),
                new Food("حساء قرع العسل", 49, 392 , "مطبخ الحساء", "Pumpkin_Soup"),
                new Food("حساء البصل", 72, 327 , "مطبخ الحساء", "Onion_Soup"),
                new Food("حساء المعكرونة", 73, 432 , "مطبخ الحساء", "Noodle_Soup"),
                new Food("حساء الكرنب", 65, 270 , "مطبخ الحساء", "Cabbage_Soup"),
                new Food("حساء البطاطس", 78, 255 , "مطبخ الحساء", "Potato_Soup"),
                new Food("حساء فلفل رومي", 81, 439 , "مطبخ الحساء", "Bell_Pepper_Soup"),
                new Food("حساء البروكلي", 87, 237 , "مطبخ الحساء", "Broccoli_Soup"),
                new Food("حساء الفطر", 104, 176 , "مطبخ الحساء", "Mushroom_Soup"),
                
                new Food("فول سوداني", 62, 234 , "بيت السناجب", "Peanuts"),
                
                new Food("Chickpea Stew", 106, 284 , "Stew Pot", "Chickpea_Stew"),
                new Food("Chili Stew", 109, 370 , "Stew Pot", "Chili_Stew"),
                new Food("Winter Stew", 112, 295 , "Stew Pot", "Winter_Stew"),

                new Food("سكر بني", 7, 32 , "طاحونة السكر", "Brown_Sugar"),
                new Food("سكر أبيض", 13, 50 , "طاحونة السكر", "White_Sugar"),
                new Food("شارب", 18, 90 , "طاحونة السكر", "Syrup"),
                
                new Food("Sushi Roll", 56, 489 , "Sushi Bar", "Sushi_Roll"),
                new Food("Lobster Sushi", 59, 637 , "Sushi Bar", "Lobster_Sushi"),
                new Food("Egg Sushi", 63, 550 , "Sushi Bar", "Egg_Sushi"),
                new Food("Big Sushi Roll", 76, 648 , "Sushi Bar", "Big_Sushi_Roll"),
                new Food("Rice Ball", 110, 464 , "Sushi Bar", "Rice_Ball"),
                
                new Food("تاكو", 77, 396 , "مطبخ التاكو", "Taco"),
                new Food("تاكو سمكة", 79, 392 , "مطبخ التاكو", "Fish_Taco"),
                new Food("كاساديا", 82, 241 , "مطبخ التاكو", "Quesadilla"),
                new Food("ناتشو", 87, 432 , "مطبخ التاكو", "Nachos"),
                
                new Food("شاي أخضر", 80, 241 , "كشك الشاي", "Green_Tea"),
                new Food("شاي بالحليب", 81, 190 , "كشك الشاي", "Milk_Tea"),
                new Food("شاي بالعسل", 83, 313 , "كشك الشاي", "Honey_Tea"),
                new Food("شاي بالليمون", 86, 241 , "كشك الشاي", "Lemon_Tea"),
                new Food("شاي بالبرتقال", 89, 255 , "كشك الشاي", "Orange_Tea"),
                new Food("شاي مثلج", 92, 252 , "كشك الشاي", "Iced_Tea"),
                new Food("شاي بالنعناع", 97, 255 , "كشك الشاي", "Mint_Tea"),
                new Food("شاي بالزنجبيل والتفاح", 88, 169 , "كشك الشاي", "Apple_Ginger_Tea"),
                
                new Food("أرز مقلي", 69, 205 , "مطبخ الووك", "Fried_Rice"),
                new Food("توفو مقلي", 89, 306 , "مطبخ الووك", "Tofu_Stir_Fry"),
                new Food("سمك حار", 79, 543 , "مطبخ الووك", "Spicy_Fish"),
                new Food("شعرية الفول السوداني", 86, 597 , "مطبخ الووك", "Peanut_Noodles"),

                new Food("Plain Yogurt", 103, 234 , "Yogurt Maker", "Plain_Yogurt"),
                new Food("Strawberry Yogurt", 105, 529 , "Yogurt Maker", "Strawberry_Yogurt"),
                new Food("Tropical Yogurt", 109, 457 , "Yogurt Maker", "Tropical_Yogurt"),
        
            )
            
            function onFoodChange(id)
            {
                var total = 0
                for (idx in foods)
                {
                    
                    var ff = document.getElementById(foods[idx].tag)
                    //document.write(foods[idx].tag)
                    //document.write(ff.value)
                    total   =   total + parseInt(ff.value)
                }
                
                var t = document.getElementById("total")
                t.innerHTML="مجموع عدد المنتجات: " + total;
                
                var last_fn = ""
                for (idx in foods)
                {
                    if (idx == 0)
                    {
                        // var t = document.getElementById(foods[idx].fn)
                        // t.innerHTML    =    foods[idx].fn + "(Total:" + total + ")"
                        last_fn  = foods[idx].fn
                    }
                    else
                    {
                        if (last_fn != foods[idx].fn)
                        {
                            var t = document.getElementById(foods[idx].fn)
                            t.innerHTML    =    foods[idx].fn + "(المجموع:" + total + ")"
                            last_fn  = foods[idx].fn
                        }
                    }
                }
            }
            
            function getDefaultFoodValue(foodTag)
            {
                for (var idx = 0; idx < fstl.length; idx++)
                {
                    if (fstl[idx] == foodTag)
                    {
                        return parseInt(fstl[idx + 1])
                    }
                }
                
                return 0
            }
            
            var last_fn = ""
        
            

            for (idx in foods) 
            {
                if (idx == 0)
                {
                    console.log(foods[idx].fn);
                    document.write("<div class=" + "col-12"  + ">");
                    document.write("<h3 class=\"machineHeading\"> " + foods[idx].fn + "</h3>")
                    document.write("<ul type=\"" + foods[idx].fn + "\">")
                document.write("</div>");

                    document.write("<div class=\"col-5 heading\">");
                        document.write( "<h4>الأسم</h4>");
                    document.write("</div>");
                //     document.write("<div class=\"col-1 heading\">");
                //     document.write("<h4></h4>");
                // document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>المستوى</h4> ");
                    document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>السعر</h4>" );
                    document.write("</div>");
                    document.write("<div class=\"col-3 heading\">");
                        document.write("<h4>الكمية</h4>");
                    document.write("</div>");
                   
                    last_fn  = foods[idx].fn
                }
                else
                {
                    if (last_fn != foods[idx].fn)
                    {   
                        document.write("<hr>");
                        document.write("<div class=" + "col-12 " + ">");
                            document.write("<h3 id=\"" + foods[idx].fn + "\"  + class=\"machineHeading\" >" + foods[idx].fn + "</h3>")
                            document.write("<ul type=\"" + foods[idx].fn + "\">")
                        document.write("</div>"); 
                        document.write("<div class=\"col-5 heading\">");
                        document.write( "<h4>الأسم</h4>");
                    document.write("</div>");
                    // document.write("<div class=\"col-3 heading\">");
                    //     document.write("<h4></h4>");
                    // document.write("</div>");            
                        document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>المستوى</h4> ");
                    document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>السعر</h4>" );
                    document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>الكمية</h4>");
                    document.write("</div>");
                    
                        last_fn  = foods[idx].fn
                    }
                }
                
                document.write("<div class=\"col-3 foodName\">");
                          document.write( foods[idx].en);
                        document.write("</div>");
                        document.write("<div class=\"col-2 foodPic\">");
                            document.write("<img class=\"foodPicSize\" src=\"../HD_Foods/"+ foods[idx].imgid +".png\">");
                        document.write("</div>");
                        document.write("<div class=\"col-2 foodLevel\">");
                            document.write( foods[idx].lvl );
                        document.write("</div>");
                        document.write("<div class=\"col-2 foodPrice\">");
                            document.write( foods[idx].price );
                        document.write("</div>");
                        document.write("<div class=\"col-3 quantityInput\">");
                            document.write("<input class=" + "numinp" + " type=\"number\" id=\"" + foods[idx].tag + "\" step=\"1\" min=\"0\" value=\"" + getDefaultFoodValue(foods[idx].tag) + "\" onchange=\"onFoodChange(this.id)\">" );
                        document.write("</div>");
                        
                        
            }
            
            onFoodChange()

            

  function copyToClipboard(element) {
    var $temp = $("<textarea>");
    var brRegex = /<br\s*[\/]?>/gi;
    $("body").append($temp);
    $temp.val($(element).html().replace(brRegex, "\r\n")).select();
    document.execCommand("Copy");
    $temp.remove();
  }
