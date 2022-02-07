module.exports = async function (context, req) {
    context.res.json({
        nometec: "Matteo",
        cognometec: "Saitta",
        ruolo: "Tutor",
        immagine: "data:image/jpeg;base64,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"
    });
};  

 