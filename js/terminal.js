$(function () {
  //  var frames = [];

  var dir = {
    color: "purple",
  };

  function welcome(term) {
    term.echo(
      "zemmsoares(C) 2022" + "\n\n" + 'Type "help" to see available commands.'
    );
  }

  function help(term) {
    term.echo(
      "Available commands: \n\n" +
        "- cat [file]          Concatenate FILE(s) to standard output.\n" +
        "- ls                  List information about the FILEs (the current directory by default).\n" +
        "- pfetch              A pretty system information tool written in POSIX sh.\n"
    );
  }

  function list(term) {
    //term.echo(dir.color);
    term.echo("[[;lime;]teste.sh] " + "about " + "links ");
  }

  function cat(term, file) {
    if (file == "about") {
      //term.echo("bababa baabab baba bababa");

      term.echo(
        '<img src="https://avatars.githubusercontent.com/u/38134965?v=4"/>',
        { raw: true }
      );

      /*
      term.echo(
        "<div class='container-parent'>" +
          "<div class='col'>" +
          '<img src="https://avatars.githubusercontent.com/u/38134965?v=4"/>' +
          "</div>" +
          "<div class='col'>" +
          "</div>" +
          { raw: true }
      );
      */
    } else if (file == "teste.sh") {
      term.echo("#!/usr/bin/env bash\n\n" + "sudo rm -rf");
    } else if (file == "links") {
      term.echo(
        "[[!;;;;https://github.com/zemmsoares]Github]\n" +
          "[[!;;;;https://www.linkedin.com/in/zemmsoares/]Linkedin]"
      );
    } else {
      term.echo("cat: No such file or directory");
    }
  }

  function pfetch(term) {
    term.echo(
      "<p class='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zm@archlap</p>" +
        "<p class='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os     Arch Linux</p>" +
        "<p class='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;host   VivoBook_ASUSLaptop X530UFO 1.0</p>" +
        "<p class='line'>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kernel 6.0.9-arch1-1</p>" +
        "<p class='line'>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;,,&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uptime " +
        time() +
        "</p>" +
        "<p class='line'>&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;-\\&nbsp;&nbsp;&nbsp;&nbsp;pkgs   722</p>" +
        "<p class='line'>&nbsp;/_-''&nbsp;&nbsp;&nbsp;&nbsp;''-_\\&nbsp;&nbsp;&nbsp;memory 6804M / 15883M</p>",
      { raw: true }
    );
  }

  $("body").terminal(
    {
      help: function () {
        help(this);
      },
      ls: function () {
        list(this);
      },
      cat: function (file) {
        cat(this, file);
      },
      pfetch: function () {
        pfetch(this);
      },
      time: function () {
        time(this);
      },
    },
    {
      // width: 500,
      // height: 230,
      prompt: "[[[;cyan;]~]]$ ",
      greetings: null,
      onInit: function (term) {
        welcome(term);
      },
      //keypress: function (e, term) {
      //  if (e.which == 100 && e.ctrlKey) {
      //    stop = true;
      //    term.resume();
      //    return false;
      //  }
      //},
      completion: ["about", "teste.sh", "links"],
    }
  );
});
