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
        "- pfetch              Simple resume.\n" +
        "- fa                  List Academic Education.\n" +
        "- fp                  List Professional Experience.\n" +
        "- fc                  List Contact Information.\n" +
        "- ls                  List information about the FILEs (the current directory by default).\n" +
        "- cat [file]          Concatenate FILE(s) to standard output.\n"
    );
  }

  function list(term) {
    //term.echo(dir.color);
    term.echo(/*"[[;lime;]teste.sh] " + */ "[[;lime;]about] " + "links ");
  }

  function fa(term) {
    term.echo(
      "<p class='title__bg'>&nbsp;> Academic Education</p>" +
        "<div><b><span class='fa__year'>[2018]</span></b> CTeSP App development <b>(IPG)</b></div>" +
        "<div><b><span class='fa__year'>[2022]</span></b> Marketing & Business Technologies <b>(IPAM)</b></div>" +
        "<div><b><span class='fa__year'>[2022]</span></b> B.S. Computer Science <b>(IPG)</b> </div>",
      { raw: true }
    );
  }

  function fp(term) {
    term.echo(
      "<p class='title__bg'>&nbsp;> Professional Experience</p>" +
        "<div><b><span class='fa__year'>[2014-2022]</span></b> Graphic design & Web development Freelancer <b>(Freelancer.com)</b></div>" +
        "<div><b><span class='fa__year'>[2018-2018]</span></b> App Development CTeSP Internship <b>(GoContact)</b> Guarda, Portugal</div>",
      { raw: true }
    );
  }

  function fc(term) {
    term.echo(
      "<p class='title__bg'>&nbsp;> Contact</p>" +
        "<div><span class='fa__year'>[Github]&nbsp;</span><a href='https://github.com/zemmsoares' target='_blank'>@zemmsoares</a></div>" +
        "<div><span class='fa__year'>[Linkedin]&nbsp;</span><a href='https://www.linkedin.com/in/zemmsoares/' target='_blank'>@zemmsoares</a></div>" +
        "<div><span class='fa__year'>[Email]&nbsp;</span>zemmsoares@gmail.com</div>",
      { raw: true }
    );
  }

  function cat(term, file) {
    if (file == "about") {
      term.echo("About info to do");
      /*
      term.echo(
        '<img src="https://avatars.githubusercontent.com/u/38134965?v=4"/>',
        { raw: true }
      );
*/
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
    } /*else if (file == "teste.sh") {
      term.echo("#!/usr/bin/env bash\n\n" + "sudo rm -rf");
    }*/ else if (file == "links") {
      term.echo(
        "[[!;;;;https://github.com/zemmsoares]Github]\n" +
          "[[!;;;;https://www.linkedin.com/in/zemmsoares/]Linkedin]\n" +
          "[[!;;;;https://www.freelancer.com/u/visualoutline]Freelancer]"
      );
    } else {
      term.echo("cat: No such file or directory");
    }
  }

  function pfetch(term) {
    term.echo(
      "<p class='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zemmsoares@arch</p>" +
        "<p class='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='pfetch__title'><b>who:</b></span>     Miguel Soares</p>" +
        "<p class='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='pfetch__title'><b>do:</b></span>   Graphic Design & Development</p>" +
        "<p class='line'>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='pfetch__title'><b>from :</b></span> Portugal</p>" +
        "<p class='line'>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;,,&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='pfetch__title'><b>uptime:</b></span> " +
        time() +
        "</p>" +
        "<p class='line'>&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;-\\&nbsp;&nbsp;&nbsp;&nbsp;<span class='pfetch__title'><b>email:</b></span>   zemmsoares@gmail.com</p>" +
        "<p class='line'>&nbsp;/_-''&nbsp;&nbsp;&nbsp;&nbsp;''-_\\&nbsp;&nbsp;&nbsp;<span class='pfetch__title'><b>memory:</b></span> 6804M / 15883M</p>",
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
      fa: function () {
        fa(this);
      },
      fp: function () {
        fp(this);
      },
      fc: function () {
        fc(this);
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
      completion: ["about", "links"],
    }
  );
});
