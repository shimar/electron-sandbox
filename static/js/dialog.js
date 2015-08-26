// dialog.js
var remote = require('remote');
var dialog = remote.require('dialog');

var curWindow;
var ESDialog = {
  openDialogBtn:     $('#open-dialog-btn'),
  saveDialogBtn:     $('#save-dialog-btn'),

  msgBoxNoneBtn:     $('#msg-box-none-btn'),
  msgBoxInfoBtn:     $('#msg-box-info-btn'),
  msgBoxErrBtn:      $('#msg-box-error-btn'),
  msgBoxQuestionBtn: $('#msg-box-question-btn'),
  msgBoxWarnBtn:     $('#msg-box-warning-btn'),

  errBoxBtn:         $('#err-box-btn'),

  init: function() {
    curWindow = remote.getCurrentWindow();
    // Show Open Dialog.
    this.openDialogBtn.click(function(event) {
      var options = {
        title: 'Open Dialog'
      };
      dialog.showOpenDialog(curWindow, options, function(filename) {
        console.log(filename);
      });
    });

    // Show Save Dialog.
    this.saveDialogBtn.click(function(event) {
      var options = { title: 'Save Dialog' };
      dialog.showSaveDialog(curWindow, options, function(filename) {
        console.log(filename);
      });
    });

    // Show MessageBox(type=none)
    this.msgBoxNoneBtn.click(function(event) {
      var options = {
        type: "none",
        buttons: ["btn1", "btn2", "btn3"],
        title:   "MessageBox(type=none)",
        message: "This is the message.",
        detail:  "This is the detail."
      };
      dialog.showMessageBox(curWindow, options, function(response) {
        console.log(response);
      });
    });

    // Show MessageBox(type=info)
    this.msgBoxInfoBtn.click(function(event) {
      var options = {
        type: "info",
        buttons: ["btn1", "btn2", "btn3"],
        title:   "MessageBox(type=info)",
        message: "This is the message.",
        detail:  "This is the detail."
      };
      dialog.showMessageBox(curWindow, options, function(response) {
        console.log(response);
      });
    });

    // Show MessageBox(type=error)
    this.msgBoxErrBtn.click(function(event) {
      var options = {
        type: "error",
        buttons: ["btn1", "btn2", "btn3"],
        title:   "MessageBox(type=error)",
        message: "This is the message.",
        detail:  "This is the detail."
      };
      dialog.showMessageBox(curWindow, options, function(response) {
        console.log(response);
      });
    });

    // Show MessageBox(type=question)
    this.msgBoxQuestionBtn.click(function(event) {
      var options = {
        type: "question",
        buttons: ["btn1", "btn2", "btn3"],
        title:   "MessageBox(type=question)",
        message: "This is the message.",
        detail:  "This is the detail."
      };
      dialog.showMessageBox(curWindow, options, function(response) {
        console.log(response);
      });
    });

    // Show MessageBox(type=warning)
    this.msgBoxWarnBtn.click(function(event) {
      var options = {
        type: "warning",
        buttons: [],
        title: "MessageBox(type=warning)",
        message: "This is the message.",
        detail: "This is the detail."
      };
      dialog.showMessageBox(curWindow, options, function(response) {
        console.log(response);
      });
    });

    // Show ErrorBox
    this.errBoxBtn.click(function(event) {
      var title   = "This is a title.";
      var content = "This is a content.";
      dialog.showErrorBox(title, content);
    });
  }
};

$(function() {
  ESDialog.init();
});
