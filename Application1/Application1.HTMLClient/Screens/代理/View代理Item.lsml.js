/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.View代理Item.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.代理Item.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.代理Item." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

