/**
 * Created by Стас on 08.02.2017.
 */
$(function () {

    var LIST = $('.bl-list');
    var BOUGHT =$('.bl-titleLeft');
    var ITEM_TEMPLATE = $('.one-item').html();
    var BOUGHT_TEMPLATE = $('.row-bought').html();
    var INPUT = $('.input');
    var LBL = $('.bl-label');



    function addItem(title) {
        var quantity = 1;
        var list = $(LIST);
        var node = $(ITEM_TEMPLATE); //Create new HTML node
        var nodeBought = $(BOUGHT_TEMPLATE);
        console.log("template", node);
        var $blLabel = node.find(".bl-label");
        var $productName = node.find(".name");
        var $minus = node.find(".bl-minus");
        var $blBoughtLabel = nodeBought.find(".bl-label1");
        var $productBoughtVal = nodeBought.find(".bl-label2");

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
        });
        node.find(".bl-plus").click(function (){
            quantity++;
            if(quantity===1){
                $minus.attr("disabled",true);
            }
            if(quantity>1){
                $minus.attr("disabled",false);
            }
            $blLabel.text(quantity);
            $productBoughtVal.text(quantity);
        });
//minus
        node.find(".bl-minus").click(function (){
            quantity--;
            if(quantity===1){
                $minus.attr("disabled",true);
            }
            if(quantity>1){
                $minus.attr("disabled",false);
            }
            $blLabel.text(quantity);
            $productBoughtVal.text(quantity);
        });





        LIST.append(node); //Add to the end of the list
        BOUGHT.append(nodeBought);

    }

    function addNew(title){
        var list = $(LIST);
        list.find(".bl-addButton").click(function () {
           // addItem(inp.getElementById("text").value );
           addItem('new');
        });
    }

    // function changeName(title){
    //     var node = $(ITEM_TEMPLATE); //Create new HTML node
    //     node.find(".name").click(function(){
    //         $("#text").val("New Value");
    //     });
    // }

    addItem("Помідори");
    addItem("Сир");
    addItem("Печиво");
    addNew();


});





