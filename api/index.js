var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/styles/shared.css
var shared_default = "/build/_assets/shared-GGRRQU2L.css";

// app/components/util/Logo.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "RemixExpenses" }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
var Logo_default = Logo;

// app/components/navigation/MainHeader.jsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function MainHeader() {
  let userId = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.NavLink, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 13,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 12,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.NavLink, { to: "/pricing", children: "Pricing" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 16,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 15,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 11,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
      userId && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Form, { method: "post", action: "logout", id: "logout-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "cta-alt", children: "Logout" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 25,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 24,
        columnNumber: 29
      }, this),
      !userId && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/auth", className: "cta", children: "Login" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 27,
        columnNumber: 37
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 22,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 21,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 20,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var MainHeader_default = MainHeader;

// app/components/util/Error.jsx
var import_fa = require("react-icons/fa"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Error2({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_fa.FaExclamationCircle, {}, void 0, !1, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: title }, void 0, !1, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, !0, {
    fileName: "app/components/util/Error.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Error_default = Error2;

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Remix Expenses",
  viewport: "width=device-width,initial-scale=1"
});
function Document({ title, children }) {
  let disableJS = (0, import_react4.useMatches)().some((match) => {
    var _a;
    return (_a = match.handle) == null ? void 0 : _a.disableJS;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap", rel: "stylesheet" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      !disableJS && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 19,
    columnNumber: 9
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 40,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  var _a;
  let caughtResponse = (0, import_react4.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Error_default, { title: caughtResponse.statusText, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong. Please try again later." }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 53,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 56,
        columnNumber: 32
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 56,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 52,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 51,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 50,
    columnNumber: 9
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { title: "An error occurred", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Error_default, { title: "An error occurred", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: error.message || "Something went wrong. Please try again later." }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 68,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 71,
        columnNumber: 32
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 71,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 67,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 66,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: shared_default }];
}

// app/routes/_app.expenses_.analysis.jsx
var app_expenses_analysis_exports = {};
__export(app_expenses_analysis_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => ExpensesAnalysisPage,
  loader: () => loader
});

// app/components/expenses/ExpenseStatistics.jsx
var import_react5 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function calculateSummaryStatistics(expenses) {
  let amounts = expenses.map((expense) => +expense.amount), maxAmount = Math.max(...amounts), minAmount = Math.min(...amounts), sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0), mean = sum / expenses.length;
  return { minAmount, maxAmount, sum, mean };
}
function ExpenseStatistics({ expenses }) {
  let { minAmount, maxAmount, sum, mean } = (0, import_react5.useMemo)(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: "Summary Statistics" }, void 0, !1, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dt", { children: "Total" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dd", { children: [
          "$",
          sum.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dt", { children: "Average" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dd", { children: [
          "$",
          mean.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dt", { children: " Min. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dt", { children: "Max. Amount" }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseStatistics.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var ExpenseStatistics_default = ExpenseStatistics;

// app/components/expenses/ChartBar.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";
  return maxValue > 0 && (barFillHeight = Math.round(value / maxValue * 100) + "%"), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "chart-bar--inner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "div",
      {
        className: "chart-bar--fill",
        style: { height: barFillHeight }
      },
      void 0,
      !1,
      {
        fileName: "app/components/expenses/ChartBar.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "chart-bar--label", children: label }, void 0, !1, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ChartBar.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}, ChartBar_default = ChartBar;

// app/components/expenses/Chart.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Chart({ expenses }) {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (let expense of expenses) {
    let expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  let dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value), totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { children: "Monthly Expenses" }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      ChartBar_default,
      {
        value: dataPoint.value,
        maxValue: totalMaximum,
        label: dataPoint.label
      },
      dataPoint.label,
      !1,
      {
        fileName: "app/components/expenses/Chart.jsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/Chart.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var Chart_default = Chart;

// app/routes/_app.expenses_.analysis.jsx
var import_react6 = require("@remix-run/react");

// app/data/database.server.js
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/expenses.server.js
async function addExpense(expenseData, userId) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
        User: { connect: { id: userId } }
      }
    });
  } catch (error) {
    throw console.log("delta-addexpense-error: ", error), new Error("Failed to add expense");
  }
}
async function getExpenses(userId) {
  if (!userId)
    throw new Error("Failed to get expenses");
  try {
    return await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" }
    });
  } catch (error) {
    throw console.log("delta-getExpenses-error: ", error), new Error("Failed to get expenses");
  }
}
async function updateExpense(id, expenseData) {
  try {
    await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date)
      }
    });
  } catch (error) {
    throw console.log("delta-updateExpense-error: ", error), new Error("Failed to update expense");
  }
}
async function deleteExpense(id) {
  try {
    await prisma.expense.delete({
      where: { id }
    });
  } catch (error) {
    throw console.log("delta-deleteExpense-error: ", error), new Error("Failed to delete expense");
  }
}

// app/routes/_app.expenses_.analysis.jsx
var import_node3 = require("@remix-run/node");

// app/data/auth.server.js
var bcrypt = __toESM(require("bcryptjs")), import_node2 = require("@remix-run/node"), SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    secure: !1,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
async function getUserFromSession(request) {
  var _a;
  let userId = (await sessionStorage.getSession((_a = request == null ? void 0 : request.headers) == null ? void 0 : _a.get("Cookie"))).get("userId");
  return userId || null;
}
async function destroyUserSession(request) {
  var _a;
  let session = await sessionStorage.getSession((_a = request == null ? void 0 : request.headers) == null ? void 0 : _a.get("Cookie"));
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request) {
  let userId = await getUserFromSession(request);
  if (!userId)
    throw (0, import_node2.redirect)("/auth?mode=login");
  return userId;
}
async function signup({ email, password }) {
  if (await prisma.user.findFirst({ where: { email } })) {
    let error = new Error("A user with the provided email address exists already.");
    throw error.status = 422, error;
  }
  let passwordHash = await bcrypt.hash(password, 12), user = await prisma.user.create({ data: { email, password: passwordHash } });
  return createUserSession(user.id, "/expenses");
}
async function login({ email, password }) {
  let existingUser = await prisma.user.findFirst({ where: { email } });
  if (!existingUser) {
    let error = new Error("Could not log you in, please check the provided credentials.");
    throw error.status = 401, error;
  }
  if (!await bcrypt.compare(password, existingUser.password)) {
    let error = new Error("Could not log you in, please check the provided credentials.");
    throw error.status = 401, error;
  }
  return createUserSession(existingUser.id, "/expenses");
}

// app/routes/_app.expenses_.analysis.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ExpensesAnalysisPage() {
  let expensesData = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Chart_default, { expenses: expensesData }, void 0, !1, {
      fileName: "app/routes/_app.expenses_.analysis.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ExpenseStatistics_default, { expenses: expensesData }, void 0, !1, {
      fileName: "app/routes/_app.expenses_.analysis.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.expenses_.analysis.jsx",
    lineNumber: 12,
    columnNumber: 12
  }, this);
}
async function loader({ request }) {
  let userId = await requireUserSession(request), expenses = await getExpenses(userId);
  if (!expenses || expenses.length === 0)
    throw (0, import_node3.json)(
      { message: "Could not load expenses for the requested analysis." },
      { status: 404, statusText: "Expenses not found" }
    );
  return expenses;
}
function CatchBoundary2() {
  var _a;
  let caughtResponse = (0, import_react6.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Error_default, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong - could not load expenses" }, void 0, !1, {
    fileName: "app/routes/_app.expenses_.analysis.jsx",
    lineNumber: 35,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_app.expenses_.analysis.jsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_app.expenses_.analysis.jsx",
    lineNumber: 33,
    columnNumber: 12
  }, this);
}

// app/routes/_marketing.pricing.jsx
var marketing_pricing_exports = {};
__export(marketing_pricing_exports, {
  default: () => PricingPage,
  handle: () => handle,
  headers: () => headers,
  meta: () => meta2
});
var import_fa2 = require("react-icons/fa");

// app/components/marketing/PricingPlan.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function PricingPlan({ title, price, perks, icon }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(icon, {}, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 7,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { children: title }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: price }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { children: perk }, perk, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("a", { href: "/not-implemented", children: "Learn More" }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/marketing/PricingPlan.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/marketing/PricingPlan.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/marketing/PricingPlan.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var PricingPlan_default = PricingPlan;

// app/routes/_marketing.pricing.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: import_fa2.FaHandshake
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: import_fa2.FaTrophy
  }
];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { children: "Great Product, Simple Pricing" }, void 0, !1, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "plan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      PricingPlan_default,
      {
        title: plan.title,
        price: plan.price,
        perks: plan.perks,
        icon: plan.icon
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_marketing.pricing.jsx",
        lineNumber: 29,
        columnNumber: 25
      },
      this
    ) }, plan.id, !1, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 28,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/routes/_marketing.pricing.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_marketing.pricing.jsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}
function meta2() {
  return {
    title: "Pricing",
    description: "See our pricing plans."
  };
}
function headers({ actionHeaders, loaderHeaders, parentHeaders }) {
  return {
    "Cache-Control": parentHeaders.get("Cache-Control")
  };
}
var handle = {
  disableJS: !0
};

// app/routes/_app.expenses.$id.jsx
var app_expenses_id_exports = {};
__export(app_expenses_id_exports, {
  action: () => action,
  default: () => UpdateExpensesPage,
  meta: () => meta3
});

// app/components/expenses/ExpenseForm.jsx
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ExpenseForm() {
  let today = new Date().toISOString().slice(0, 10), validationErrors = (0, import_react7.useActionData)(), isSubmitting = (0, import_react7.useNavigation)().state !== "idle", params = (0, import_react7.useParams)(), expensesData = (0, import_react7.useMatches)().find((match) => match.id === "routes/_app.expenses").data, expenseData = expensesData.find((expense) => expense.id === params.id);
  if (params.id && !expenseData)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: "Invalid expense id." }, void 0, !1, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 18,
      columnNumber: 16
    }, this);
  let defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : {
    title: "",
    amount: "",
    date: ""
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_react7.Form,
    {
      method: expensesData ? "patch" : "post",
      className: "form",
      id: "expense-form",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("input", { type: "text", id: "title", name: "title", required: !0, maxLength: 30, defaultValue: defaultValues.title }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "form-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, !1, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 55,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "number",
                id: "amount",
                name: "amount",
                min: "0",
                step: "0.01",
                defaultValue: defaultValues.amount,
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/expenses/ExpenseForm.jsx",
                lineNumber: 56,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, !1, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 67,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "date",
                id: "date",
                name: "date",
                max: today,
                required: !0,
                defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : ""
              },
              void 0,
              !1,
              {
                fileName: "app/components/expenses/ExpenseForm.jsx",
                lineNumber: 68,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 66,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: error }, error, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 74,
          columnNumber: 21
        }, this)) }, void 0, !1, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 72,
          columnNumber: 34
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "form-actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save Expense" }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react7.Link, { to: "..", children: "Cancel" }, void 0, !1, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 81,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 45,
      columnNumber: 9
    },
    this
  );
}
var ExpenseForm_default = ExpenseForm;

// app/components/util/Modal.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "dialog",
    {
      className: "modal",
      open: !0,
      onClick: (event) => event.stopPropagation(),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/util/Modal.jsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

// app/routes/_app.expenses.$id.jsx
var import_react8 = require("@remix-run/react");
var import_node4 = require("@remix-run/node");

// app/data/validation.server.js
function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}
function isValidAmount(value) {
  let amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}
function isValidDate(value) {
  return value && new Date(value).getTime() < new Date().getTime();
}
function validateExpenseInput(input) {
  let validationErrors = {};
  if (isValidTitle(input.title) || (validationErrors.title = "Invalid expense title. Must be at most 30 characters long."), isValidAmount(input.amount) || (validationErrors.amount = "Invalid amount. Must be a number greater than zero."), isValidDate(input.date) || (validationErrors.date = "Invalid date. Must be a date before today."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}
function isValidEmail(value) {
  return value && value.includes("@");
}
function isValidPassword(value) {
  return value && value.trim().length >= 7;
}
function validateCredentials(input) {
  let validationErrors = {};
  if (isValidEmail(input.email) || (validationErrors.email = "Invalid email address."), isValidPassword(input.password) || (validationErrors.password = "Invalid password. Must be at least 7 characters long."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}

// app/routes/_app.expenses.$id.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function UpdateExpensesPage() {
  let navigate = (0, import_react8.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/_app.expenses.$id.jsx",
    lineNumber: 16,
    columnNumber: 42
  }, this) }, void 0, !1, {
    fileName: "app/routes/_app.expenses.$id.jsx",
    lineNumber: 16,
    columnNumber: 12
  }, this);
}
async function action({ params, request }) {
  let expenseId = params.id;
  if (request.method === "PATCH") {
    let formData = await request.formData(), expenseData = Object.fromEntries(formData);
    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }
    return await updateExpense(expenseId, expenseData), (0, import_node4.redirect)("/expenses");
  } else if (request.method === "DELETE")
    return await deleteExpense(expenseId), { deleteId: expenseId };
}
function meta3({ params, location, data, parentsData }) {
  return {
    title: parentsData["routes/_app.expenses"].find((expense2) => expense2.id === params.id).title,
    description: "Manage your expenses with ease."
  };
}

// app/routes/_app.expenses.add.jsx
var app_expenses_add_exports = {};
__export(app_expenses_add_exports, {
  action: () => action2,
  default: () => AddExpensesPage
});
var import_react9 = require("@remix-run/react");
var import_node5 = require("@remix-run/node");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function AddExpensesPage() {
  let navigate = (0, import_react9.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ExpenseForm_default, {}, void 0, !1, {
    fileName: "app/routes/_app.expenses.add.jsx",
    lineNumber: 17,
    columnNumber: 42
  }, this) }, void 0, !1, {
    fileName: "app/routes/_app.expenses.add.jsx",
    lineNumber: 17,
    columnNumber: 12
  }, this);
}
async function action2({ request }) {
  let userId = await requireUserSession(request), formData = await request.formData(), expenseData = Object.fromEntries(formData);
  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }
  return await addExpense(expenseData, userId), (0, import_node5.redirect)("/expenses");
}

// app/routes/_marketing._index.jsx
var marketing_index_exports = {};
__export(marketing_index_exports, {
  default: () => Index,
  handle: () => handle2,
  headers: () => headers2,
  meta: () => meta4
});
var import_react10 = require("@remix-run/react"), import_fa3 = require("react-icons/fa"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_fa3.FaDollarSign, {}, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: "A Central Space" }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 10,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.jsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: "images/expenses-management.jpg", alt: "A list of expenses." }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 14,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 13,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "marketing-explanation", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "Manage your expenses in one central place." }, void 0, !1, {
            fileName: "app/routes/_marketing._index.jsx",
            lineNumber: 17,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react10.Link, { className: "cta", to: "/expenses", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: "Get Started" }, void 0, !1, {
              fileName: "app/routes/_marketing._index.jsx",
              lineNumber: 20,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_fa3.FaArrowRight, {}, void 0, !1, {
              fileName: "app/routes/_marketing._index.jsx",
              lineNumber: 21,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_marketing._index.jsx",
            lineNumber: 19,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_marketing._index.jsx",
            lineNumber: 18,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 16,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_marketing._index.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_fa3.FaChartBar, {}, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: "Detailed Analytics" }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "marketing-explanation", children: "Benefit from best-in-class analytics to understand your spending patterns." }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: "images/expenses-chart.jpg", alt: "A demo bar chart." }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 38,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_marketing._index.jsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_marketing._index.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_marketing._index.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_marketing._index.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this);
}
function meta4() {
  return {
    title: "RemixExpenses - The Complete App",
    description: "Manage your expenses with ease."
  };
}
function headers2({ actionHeaders, loaderHeaders, parentHeaders }) {
  return {
    "Cache-Control": parentHeaders.get("Cache-Control")
  };
}
var handle2 = {
  disableJS: !0
};

// app/routes/_marketing.auth.jsx
var marketing_auth_exports = {};
__export(marketing_auth_exports, {
  action: () => action3,
  default: () => AuthPage,
  headers: () => headers3,
  links: () => links2
});

// app/styles/auth.css
var auth_default = "/build/_assets/auth-7ZCCMTFI.css";

// app/components/auth/AuthForm.jsx
var import_fa4 = require("react-icons/fa"), import_react11 = require("@remix-run/react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function AuthForm() {
  let [searchParams] = (0, import_react11.useSearchParams)(), navigation = (0, import_react11.useNavigation)(), validationErrors = (0, import_react11.useActionData)(), authMode = searchParams.get("mode") || "login", submitBtnCaption = authMode === "login" ? "Login" : "Create User", toggleBtnCaption = authMode === "login" ? "Create a new user" : "Log in with existing user", isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react11.Form, { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "icon-img", children: authMode === "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_fa4.FaLock, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 18,
      columnNumber: 41
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_fa4.FaUserPlus, {}, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 18,
      columnNumber: 53
    }, this) }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "email", id: "email", name: "email", required: !0 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 22,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 25,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 26,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { children: error }, error, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 30,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 28,
      columnNumber: 34
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Authenticating..." : submitBtnCaption }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react11.Link, { to: `?mode=${authMode === "login" ? "signup" : "login"}`, children: toggleBtnCaption }, void 0, !1, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/AuthForm.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}
var AuthForm_default = AuthForm;

// app/routes/_marketing.auth.jsx
var import_node6 = require("@remix-run/node"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function AuthPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(AuthForm_default, {}, void 0, !1, {
    fileName: "app/routes/_marketing.auth.jsx",
    lineNumber: 8,
    columnNumber: 12
  }, this);
}
async function action3({ request }) {
  let authMode = new URL(request.url).searchParams.get("mode") || "login", formData = await request.formData(), credentials = Object.fromEntries(formData);
  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }
  try {
    return authMode === "login" ? await login(credentials) : await signup(credentials);
  } catch (error) {
    if (error.status === 422 || error.status === 401)
      return { credentials: error.message };
  }
}
function links2() {
  return [{ rel: "stylesheet", href: auth_default }];
}
function headers3({ actionHeaders, loaderHeaders, parentHeaders }) {
  return {
    "Cache-Control": parentHeaders.get("Cache-Control")
  };
}

// app/routes/_app.expenses.jsx
var app_expenses_exports = {};
__export(app_expenses_exports, {
  default: () => ExpensesLayout,
  headers: () => headers4,
  loader: () => loader2
});
var import_react13 = require("@remix-run/react");

// app/components/expenses/ExpenseListItem.jsx
var import_react12 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function ExpenseListItem({ id, title, amount }) {
  let fetcher = (0, import_react12.useFetcher)();
  function deleteExpenseItemHandler() {
    !confirm("Are you sure? Do you want to delete this item?") || fetcher.submit(null, {
      method: "delete",
      action: `/expenses/${id}`
    });
  }
  return fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("article", { className: "expense-item locked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Deleting..." }, void 0, !1, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "expense-title", children: title }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, !0, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react12.Link, { to: id, children: "Edit" }, void 0, !1, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 44,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 34,
    columnNumber: 9
  }, this);
}
var ExpenseListItem_default = ExpenseListItem;

// app/components/expenses/ExpensesList.jsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ExpensesList({ expenses }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    ExpenseListItem_default,
    {
      id: expense.id,
      title: expense.title,
      amount: expense.amount
    },
    void 0,
    !1,
    {
      fileName: "app/components/expenses/ExpensesList.jsx",
      lineNumber: 9,
      columnNumber: 11
    },
    this
  ) }, expense.id, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var ExpensesList_default = ExpensesList;

// app/routes/_app.expenses.jsx
var import_fa5 = require("react-icons/fa");
var import_node7 = require("@remix-run/node");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ExpensesLayout() {
  let expenses = (0, import_react13.useLoaderData)(), hasExpenses = expenses && expenses.length > 0;
  return console.log("delta-expenses: ", expenses), /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_app.expenses.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { id: "expenses-actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react13.Link, { to: "add", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_fa5.FaPlus, {}, void 0, !1, {
            fileName: "app/routes/_app.expenses.jsx",
            lineNumber: 20,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: "Add Expense" }, void 0, !1, {
            fileName: "app/routes/_app.expenses.jsx",
            lineNumber: 21,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 19,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("a", { href: "/expenses/raw", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_fa5.FaDownload, {}, void 0, !1, {
            fileName: "app/routes/_app.expenses.jsx",
            lineNumber: 24,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: "Load Raw Data" }, void 0, !1, {
            fileName: "app/routes/_app.expenses.jsx",
            lineNumber: 25,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 23,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.expenses.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      hasExpenses && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(ExpensesList_default, { expenses }, void 0, !1, {
        fileName: "app/routes/_app.expenses.jsx",
        lineNumber: 28,
        columnNumber: 29
      }, this),
      !hasExpenses && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { id: "no-expenses", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { children: "No expenses found" }, void 0, !1, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 31,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: [
          "Start ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react13.Link, { to: "add", children: "adding some" }, void 0, !1, {
            fileName: "app/routes/_app.expenses.jsx",
            lineNumber: 33,
            columnNumber: 31
          }, this),
          " today."
        ] }, void 0, !0, {
          fileName: "app/routes/_app.expenses.jsx",
          lineNumber: 32,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_app.expenses.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_app.expenses.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.expenses.jsx",
    lineNumber: 15,
    columnNumber: 12
  }, this);
}
async function loader2({ request }) {
  let userId = await requireUserSession(request), expenses = await getExpenses(userId);
  return (0, import_node7.json)(expenses, {
    headers: {
      "Cache-Control": "max-age=3"
    }
  });
}
function headers4({ actionHeaders, loaderHeaders, parentHeaders }) {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control")
  };
}

// app/routes/expenses.raw.js
var expenses_raw_exports = {};
__export(expenses_raw_exports, {
  loader: () => loader3
});
async function loader3({ request }) {
  let userId = await requireUserSession(request);
  return getExpenses(userId);
}

// app/routes/_marketing.jsx
var marketing_exports = {};
__export(marketing_exports, {
  default: () => MarketingLayout,
  headers: () => headers5,
  links: () => links3,
  loader: () => loader4
});
var import_react14 = require("@remix-run/react");

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-RVXOO7W5.css";

// app/routes/_marketing.jsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function MarketingLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(MainHeader_default, {}, void 0, !1, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react14.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_marketing.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_marketing.jsx",
    lineNumber: 8,
    columnNumber: 12
  }, this);
}
function loader4({ request }) {
  return getUserFromSession(request);
}
function links3() {
  return [{ rel: "stylesheet", href: marketing_default }];
}
function headers5() {
  return {};
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action4
});
var import_node8 = require("@remix-run/node");
function action4({ request }) {
  if (request.method !== "POST")
    throw (0, import_node8.json)({ message: "Invalid request method" }, { status: 400 });
  return destroyUserSession(request);
}

// app/routes/_app.jsx
var app_exports = {};
__export(app_exports, {
  default: () => ExpensesAppLayout,
  links: () => links4
});
var import_react16 = require("@remix-run/react");

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-I2WWZSEC.css";

// app/components/navigation/ExpensesHeader.jsx
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function ExpensesHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react15.NavLink, { to: "/expenses", end: !0, children: "Manage Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 12,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 11,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react15.NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 17,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 16,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react15.Form, { method: "post", action: "logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("button", { className: "cta", children: "Logout" }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 23,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 22,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/ExpensesHeader.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
var ExpensesHeader_default = ExpensesHeader;

// app/routes/_app.jsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function ExpensesAppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ExpensesHeader_default, {}, void 0, !1, {
      fileName: "app/routes/_app.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_app.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_app.jsx",
    lineNumber: 7,
    columnNumber: 12
  }, this);
}
function links4() {
  return [{ rel: "stylesheet", href: expenses_default }];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "a5893bab", entry: { module: "/build/entry.client-U7RJF3EV.js", imports: ["/build/_shared/chunk-UVSCFGD2.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JHNOAA3P.js", imports: ["/build/_shared/chunk-D42EREKW.js", "/build/_shared/chunk-NH6FOAN3.js", "/build/_shared/chunk-Z3RAAB2A.js", "/build/_shared/chunk-7WJ36XMW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/_app": { id: "routes/_app", parentId: "root", path: "_app", index: void 0, caseSensitive: void 0, module: "/build/routes/_app-JYB6IV5C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.expenses": { id: "routes/_app.expenses", parentId: "root", path: "_app/expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.expenses-GVGJEW5W.js", imports: ["/build/_shared/chunk-RJQLDWTA.js", "/build/_shared/chunk-V2UFASCO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.expenses.$id": { id: "routes/_app.expenses.$id", parentId: "root", path: "_app/expenses/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.expenses.$id-LRDAXW7D.js", imports: ["/build/_shared/chunk-JF4FYUBY.js", "/build/_shared/chunk-RJQLDWTA.js", "/build/_shared/chunk-BWZQVMXW.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.expenses.add": { id: "routes/_app.expenses.add", parentId: "root", path: "_app/expenses/add", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.expenses.add-SPRGCRQO.js", imports: ["/build/_shared/chunk-JF4FYUBY.js", "/build/_shared/chunk-RJQLDWTA.js", "/build/_shared/chunk-V2UFASCO.js", "/build/_shared/chunk-BWZQVMXW.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_app.expenses_.analysis": { id: "routes/_app.expenses_.analysis", parentId: "root", path: "_app/expenses_/analysis", index: void 0, caseSensitive: void 0, module: "/build/routes/_app.expenses_.analysis-3KPKVDQD.js", imports: ["/build/_shared/chunk-RJQLDWTA.js", "/build/_shared/chunk-V2UFASCO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/_marketing": { id: "routes/_marketing", parentId: "root", path: "_marketing", index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing-B6HSWU3A.js", imports: ["/build/_shared/chunk-V2UFASCO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing._index": { id: "routes/_marketing._index", parentId: "root", path: "_marketing/_index", index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing._index-J2USCYP2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing.auth": { id: "routes/_marketing.auth", parentId: "root", path: "_marketing/auth", index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing.auth-TYBKWF3X.js", imports: ["/build/_shared/chunk-V2UFASCO.js", "/build/_shared/chunk-BWZQVMXW.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_marketing.pricing": { id: "routes/_marketing.pricing", parentId: "root", path: "_marketing/pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/_marketing.pricing-NFFONT3G.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/expenses.raw": { id: "routes/expenses.raw", parentId: "root", path: "expenses/raw", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses.raw-CQQZBY3I.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-NLVU5UFA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-A5893BAB.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_app.expenses_.analysis": {
    id: "routes/_app.expenses_.analysis",
    parentId: "root",
    path: "_app/expenses_/analysis",
    index: void 0,
    caseSensitive: void 0,
    module: app_expenses_analysis_exports
  },
  "routes/_marketing.pricing": {
    id: "routes/_marketing.pricing",
    parentId: "root",
    path: "_marketing/pricing",
    index: void 0,
    caseSensitive: void 0,
    module: marketing_pricing_exports
  },
  "routes/_app.expenses.$id": {
    id: "routes/_app.expenses.$id",
    parentId: "root",
    path: "_app/expenses/:id",
    index: void 0,
    caseSensitive: void 0,
    module: app_expenses_id_exports
  },
  "routes/_app.expenses.add": {
    id: "routes/_app.expenses.add",
    parentId: "root",
    path: "_app/expenses/add",
    index: void 0,
    caseSensitive: void 0,
    module: app_expenses_add_exports
  },
  "routes/_marketing._index": {
    id: "routes/_marketing._index",
    parentId: "root",
    path: "_marketing/_index",
    index: void 0,
    caseSensitive: void 0,
    module: marketing_index_exports
  },
  "routes/_marketing.auth": {
    id: "routes/_marketing.auth",
    parentId: "root",
    path: "_marketing/auth",
    index: void 0,
    caseSensitive: void 0,
    module: marketing_auth_exports
  },
  "routes/_app.expenses": {
    id: "routes/_app.expenses",
    parentId: "root",
    path: "_app/expenses",
    index: void 0,
    caseSensitive: void 0,
    module: app_expenses_exports
  },
  "routes/expenses.raw": {
    id: "routes/expenses.raw",
    parentId: "root",
    path: "expenses/raw",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_raw_exports
  },
  "routes/_marketing": {
    id: "routes/_marketing",
    parentId: "root",
    path: "_marketing",
    index: void 0,
    caseSensitive: void 0,
    module: marketing_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_app": {
    id: "routes/_app",
    parentId: "root",
    path: "_app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
