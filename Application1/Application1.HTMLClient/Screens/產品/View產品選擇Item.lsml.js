/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.View產品選擇Item.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.產品選擇Item.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.產品選擇Item." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

