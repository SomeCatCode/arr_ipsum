var pageJs = {
    init: function (settings) {
        pageJs.config = {
            idInputCount: '#inputCount',
            idInputMode: '#inputMode',
            idInputSubmit: '#inputSubmit',
            idOutput: '#outputText',
            idCopy: '#outputTextCopy',
            idInputQuotes: '#inputQuotes',
        };
        $.extend(pageJs.config, settings);

        $(document)
            .on('click', pageJs.config.idInputSubmit, pageJs.clickGenerate)
            .on('click', pageJs.config.idCopy, pageJs.copyToClipboard);
        $(pageJs.config.idInputQuotes).parent().checkbox();
        $(pageJs.config.idInputSubmit).dropdown();
        $(pageJs.config.idInputSubmit).click();
    },
    clickGenerate: function (e) {
        e.preventDefault();
        let response = arrIpsum.getIpsum(
            $(pageJs.config.idInputMode).val(),
            $(pageJs.config.idInputCount).val(),
            $(pageJs.config.idInputQuotes).parent().checkbox('is checked'));
        $(pageJs.config.idOutput).val(response);
    },
    copyToClipboard: function (element) {
        var copyText = document.getElementById("outputText");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand('copy');
        navigator.clipboard.writeText(copyText.value);
    }
};