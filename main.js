/**
 * Created by Стас on 08.02.2017.
 */
$(function () {

    var LIST = $('.bl-list');
    var BOUGHT =$('.bl-titleLeft');
    var ITEM_TEMPLATE = $('.one-item').html();
    var BOUGHT_TEMPLATE = $('.row-bought').html();
    var ITN = $('.one-itemBought');
    var LBL = $('.bl-label');



    function addItem(title) {
        var quantity = 1;
        var input = $(".text");
        var node = $(ITEM_TEMPLATE); //Create new HTML node
        var newNode = $(ITN);
        var nodeBought = $(BOUGHT_TEMPLATE);
        console.log("template", node);
        var $blLabel = node.find(".bl-label");
        var $productName = node.find(".name");
        var $minus = node.find(".bl-minus");
        var $blBoughtLabel = nodeBought.find(".bl-label1");
        var $productBoughtVal = nodeBought.find(".bl-label2");
        var $titleLeft = nodeBought.find("bl-titleLeft");
        var $titleBought = nodeBought.find("bl-titleBought");

        console.log("product pass", $productName);
        console.log("quantity pass",$blLabel);

       // console.log("Product name", $productName.text());

        $productName.text(title); //Set product title
        $blLabel.text(quantity);
        $blBoughtLabel.text(title);
        $productBoughtVal.text(quantity);


//Delete Action
        node.find(".bl-cross").click(function () {
            node.remove();
            nodeBought.remove();
            updateNode();
        });
        if(quantity===1){
            $minus.attr("disabled",true);
        }
        node.find(".bl-plus").click(function (){
            quantity++;
            if(quantity>1){
                $minus.attr("disabled",false);
            }
            if(quantity===1){
                $minus.attr("disabled",true);
            }


            $blLabel.text(quantity);
            $productBoughtVal.text(quantity);
        });
//minus
        node.find(".bl-minus").click(function (){
            quantity--;
            if(quantity>1){
                $minus.attr("disabled",false);

            }
            if(quantity===1){
                $minus.attr("disabled",true);
            }


            $blLabel.text(quantity);
            $productBoughtVal.text(quantity);

        });

        $productName.click(function(){
            var oName = node.name();
            var nName = '';

            node.addClass("nameChange").val(oName);
            node.removeClass("name");
            if(node.find(".nameChange").val()!=''){
                nName=node.find(".nameChange").val();
                $productName.text(nName);
                $blBoughtLabel.text(nName);
            }else{
                $productName.text(oName);
                $blBoughtLabel.text(oName);
            }
            $productName.focus();
            $productName.focusout(function(){
                node.removeClass("nameChange");
                node.addClass("name");
            });
        });



        node.find(".boughtButton").click(function(){
            node.addClass("one-itemBought");
            node.removeClass("one-item");
            nodeBought.remove();
            $titleBought.append(nodeBought);
        });

        node.find(".boughtButton").click(function(){
            node.addClass("one-item");
            node.removeClass("one-itemBought");
            nodeBought.remove();
            $titleLeft.append(nodeBought);
        });





        LIST.append(node); //Add to the end of the list
        BOUGHT.append(nodeBought);

    }

//add product
    function addNew(title){
        var input = $(".text");
        var list = $(LIST);
        list.find(".bl-addButton").click(function () {
           // addItem(inp.getElementById("text").value );
            if(input.val()!="") {
                addItem(input.val());

            }
            input.val('');
        });
        $(".text").keypress(function(e) {
            if (e.which == 13) {
                if(input.val()!="") {
                    addItem(input.val());
                }
                input.val('');
            }
        });
    }



    function updateNode(node, fn) {
        node.fadeOut(250, function(){
            fn();
            node.fadeIn(250);
        });
    }

    addItem("Помідори");
    addItem("Сир");
    addItem("Печиво");
    addNew();


});





