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
  msgBoxWarnBtn:     $('#msg-box-warn-btn'),

  errBoxBtn:         $('#err-box-btn'),

  init: function() {
    curWindow = remote.getCurrentWindow();
    this.openDialogBtn.click(function(event) {
      var options = {
        title: 'Open Dialog'
      };
      dialog.showOpenDialog(curWindow, options, function() {
      });
    });

    this.saveDialogBtn.click(function(event) {
      var options = { title: 'Save Dialog' };
      dialog.showSaveDialog(curWindow, options, function() {
      });
    });
  }
};

$(function() {
  ESDialog.init();
});
