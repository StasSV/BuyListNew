/**
 * Created by Стас on 08.02.2017.
 */
$(function () {

    var LIST = $('.bl-list');
    var LEFT = $('.bl-titleLeft');
    var BOUGHT = $('.bl-titleBought');
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
        var $titleLeft = nodeBought.find(".bl-titleLeft");
        var $titleBought = nodeBought.find(".bl-titleBought");

        console.log("product pass", $productName);
        console.log("quantity pass", $blLabel);
        console.log("product pass", $blBoughtLabel);

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
        if (quantity === 1) {
            $minus.attr("disabled", true);
            $minus.css("opacity","0.5");
        }
        node.find(".bl-plus").click(function () {
            quantity++;
            if (quantity > 1) {
                $minus.attr("disabled", false);
                $minus.css("opacity","1");
            }
            if (quantity === 1) {
                $minus.attr("disabled", true);
                $minus.css("opacity","0.5");
            }
            $blLabel.text(quantity);
            $productBoughtVal.text(quantity);
        });
//minus
        node.find(".bl-minus").click(function () {
            quantity--;
            if (quantity > 1) {
                $minus.attr("disabled", false);
                $minus.css("opacity","1");
            }
            if (quantity === 1) {
                $minus.attr("disabled", true);
                $minus.css("opacity","0.5");
            }
            $blLabel.text(quantity);
            $productBoughtVal.text(quantity);
        });

        node.find(".bl-product").click(function () {
            var oName = node.find(".name").text();

            var nName = '';

            node.find(".name").css("display","none");
            node.find(".nameChange").css("display","inline");
            node.find(".nameChange").val(oName);
            if(node.find(".nameChange").val()!='') {
                nName = node.find(".nameChange").val();
                node.find(".name").val(nName);
                node.find(".nameChange").focus();
                node.find(".nameChange").focusout(function(){
                    node.find(".name").css("display","inline");
                    node.find(".nameChange").css("display","none");
                    $blBoughtLabel.text(nName);
                });
            }else{
                node.find(".name").val(oName);
                node.find(".nameChange").focus();
                node.find(".nameChange").focusout(function(){
                    node.find(".name").css("display","inline");
                    node.find(".nameChange").css("display","none");
                    $blBoughtLabel.text(oName);
                });
            }
        });


        node.find(".boughtButton").click(function () {
            node.find(".bl-plus").css("display","none");
            node.find(".bl-minus").css("display","none");
            node.find(".bl-cross").css("display","none");
            node.find(".boughtButton").css("display","none");
            node.find(".bl-NOTBought").css("display","inline");
            node.find(".name").css("text-decoration","line-through");
            BOUGHT.append(nodeBought);
            $titleBought.append(nodeBought);

        });

        node.find(".bl-NOTBought").click(function () {
            node.find(".bl-plus").css("display","inline");
            node.find(".bl-minus").css("display","inline");
            node.find(".bl-cross").css("display","inline");
            node.find(".boughtButton").css("display","inline");
            node.find(".bl-NOTBought").css("display","none");
            node.find(".name").css("text-decoration","none");
            nodeBought.css("display","inline");
            LEFT.append(nodeBought);
            $titleLeft.append(nodeBought);

        });

        LIST.append(node); //Add to the end of the list
        LEFT.append(nodeBought);




    }

//add product
    function addNew() {
        var input = $(".text");
        var list = $(LIST);
        list.find(".bl-addButton").click(function () {
            // addItem(inp.getElementById("text").value );
            if (input.val() != "") {
                addItem(input.val());

            }
            input.val('');
        });
        $(".text").keypress(function (e) {
            if (e.which == 13) {
                if (input.val() != "") {
                    addItem(input.val());
                }
                input.val('');
            }
        });

    }




    addItem("Помідори");
    addItem("Сир");
    addItem("Печиво");
    addNew();


});





