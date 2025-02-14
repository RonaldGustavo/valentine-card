$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $('#open');
    var btn_yes = $('#yes-btn');
    var btn_no = $('#no-btn');
    var modal = $('#custom-modal');
    var closeModalBtn = $('#close-modal');

    envelope.add(btn_open).click(open);
    btn_yes.click(showModal);
    closeModalBtn.click(closeModal);
    btn_no.hover(hideNoButton, showNoButton);

    function open() {
        envelope
            .addClass("open")
            .removeClass("close")
            .animate({ marginTop: "100px" }, 300);

        btn_yes.add(btn_no).removeClass("hidden").css("visibility", "visible");
    }

    function close() {
        envelope
            .addClass("close")
            .removeClass("open")
            .animate({ marginTop: "0px" }, 300);

        btn_yes.add(btn_no).addClass("hidden").css("visibility", "hidden");
    }

    function showModal() {
        modal.removeClass("hidden");
        close();
    }

    function closeModal() {
        modal.addClass("hidden");
        close();
    }

    function hideNoButton() {
        $(this).addClass("hidden");
    }

    function showNoButton() {
        $(this).removeClass("hidden");
    }
});
