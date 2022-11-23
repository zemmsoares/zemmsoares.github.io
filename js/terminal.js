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
    term.echo("Available commands: \n\n" + "- cat\n" + "- ls\n");
  }

  function list(term) {
    //term.echo(dir.color);
    term.echo("[[;lime;]teste.sh] " + "about " + "links ");
  }

  function cat(term, file) {
    if (file == "about") {
      term.echo("bababa baabab baba bababa");
      term.echo(
        '<img src="https://avatars.githubusercontent.com/u/38134965?v=4"/>',
        { raw: true }
      );
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
