$(document).ready(function () {
    $('.btn_final').submit(function (e) {
        if('.btn_final' === "Mail envoyé avec succès") {
        e.preventDefault();
        iziToast.sucess({
            timeout: 10000,
            position: "Topcenter",
            title: 'Message envoyé',
            message: 'Votre mail a bien été envoyé. '
        });
    }
    else {
        e.preventDefault();
        iziToast.error({
            timeout: 10000,
            position: "Topcenter",
            title: 'Mail non envoyé',
            message: "Votre mail n'a pas été envoyé."
        });
    }
    })
});