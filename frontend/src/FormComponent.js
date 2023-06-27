import React from "react";
import "./Vendors/css/normalize.css";
import "./Vendors/css/grid.css";
import "./Vendors/css/ionicons.min.css";
import "./Vendors/css/animate.css";
import "./Resources/css/style.css";
import "./Resources/css/queries.css";

class FormComponent extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="vendors/css/normalize.css"
          />
          <link rel="stylesheet" type="text/css" href="vendors/css/grid.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="vendors/css/ionicons.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="vendors/css/animate.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="resources/css/style.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="resources/css/queries.css"
          />
          <link
            href="http://fonts.googleapis.com/css?family=Lato:100,300,400,300italic"
            rel="stylesheet"
            type="text/css"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/resources/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/resources/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/resources/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/resources/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/resources/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/resources/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta
            name="msapplication-config"
            content="/resources/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />

          <title>Blooprint</title>
        </head>
        <body>
          <section class="section-form">
            <div class="row">
              <h2>Please Provide The Required Details</h2>
            </div>
            <div class="row">
              <form method="post" action="#" class="contact-form">
                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="name">Sheet ID</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter the Sheet ID"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="email">Account Name</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter the Account Name"
                      required
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="email">Sheet Name(with FSN's)</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter the Sheet Name containing FSN's"
                      required
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col span-1-of-3">
                    <label for="email">Output SheetName</label>
                  </div>
                  <div class="col span-2-of-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter the Output Sheet Name"
                      required
                    />
                  </div>
                </div>

                <div class="col span-2-of-3">
                  <input type="submit" value="Send it!" />
                </div>
              </form>
            </div>
          </section>
        </body>
      </html>
    );
  }
}

export default FormComponent;
