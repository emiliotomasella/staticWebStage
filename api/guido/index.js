module.exports = async function (context, req) {
    context.res.json({
        nometec: "Guido",
        cognometec: "Cosulich",
        ruolo: "supporto didattico",
        percorsoimmagine: "data:image/jpeg;base64,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"
    });
};  