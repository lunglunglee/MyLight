/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.View訂單Item.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.訂單Item.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.訂單Item." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

