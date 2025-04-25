"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var LoadingScreen_1 = require("@/components/invitation/LoadingScreen");
var IntroSection_1 = require("@/components/invitation/IntroSection");
var HeroSection_1 = require("@/components/invitation/HeroSection");
var DetailsSection_1 = require("@/components/invitation/DetailsSection");
var BotonFlotanteRegalos_1 = require("@/components/invitation/BotonFlotanteRegalos");
var toaster_1 = require("@/components/ui/toaster");
function Home() {
    var _a = react_1.useState(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react_1.useState(false), showIntro = _b[0], setShowIntro = _b[1];
    var _c = react_1.useState(false), showInvitation = _c[0], setShowInvitation = _c[1];
    var _d = react_1.useState(false), showModal = _d[0], setShowModal = _d[1]; // Nuevo estado
    react_1.useEffect(function () {
        var timer = setTimeout(function () {
            setIsLoading(false);
            setShowIntro(true);
        }, 2000);
        return function () { return clearTimeout(timer); };
    }, []);
    var handleProceedToInvitation = function () {
        setShowIntro(false);
        setShowInvitation(true);
    };
    var toggleModal = function () {
        setShowModal(!showModal);
    };
    if (isLoading) {
        return react_1["default"].createElement(LoadingScreen_1.LoadingScreen, null);
    }
    if (showIntro) {
        return react_1["default"].createElement(IntroSection_1.IntroSection, { onProceed: handleProceedToInvitation });
    }
    if (showInvitation) {
        return (react_1["default"].createElement("div", { className: "relative flex flex-col items-center min-h-screen" },
            react_1["default"].createElement("main", { className: "w-full" },
                react_1["default"].createElement(HeroSection_1.HeroSection, null),
                react_1["default"].createElement(DetailsSection_1.DetailsSection, null)),
            react_1["default"].createElement(BotonFlotanteRegalos_1["default"], null),
            react_1["default"].createElement(toaster_1.Toaster, null),
            react_1["default"].createElement("button", { onClick: toggleModal, className: "fixed bottom-5 right-5 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg z-50" }, "Dej\u00E1 tu mensaje"),
            showModal && (react_1["default"].createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" },
                react_1["default"].createElement("div", { className: "bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative" },
                    react_1["default"].createElement("button", { onClick: toggleModal, className: "absolute top-2 right-3 text-gray-500 hover:text-gray-700" }, "\u2715"),
                    react_1["default"].createElement("h2", { className: "text-lg font-bold mb-4" }, "Envi\u00E1 tu mensaje"),
                    react_1["default"].createElement("form", { name: "contacto", method: "POST", "data-netlify": "true", className: "flex flex-col space-y-3" },
                        react_1["default"].createElement("input", { type: "hidden", name: "form-name", value: "contacto" }),
                        react_1["default"].createElement("input", { type: "text", name: "nombre", placeholder: "Tu nombre", className: "border p-2 rounded", required: true }),
                        react_1["default"].createElement("input", { type: "email", name: "email", placeholder: "Tu email", className: "border p-2 rounded", required: true }),
                        react_1["default"].createElement("textarea", { name: "mensaje", placeholder: "Escrib\u00ED tu mensaje...", className: "border p-2 rounded", required: true }),
                        react_1["default"].createElement("button", { type: "submit", className: "bg-pink-500 hover:bg-pink-600 text-white py-2 rounded" }, "Enviar")))))));
    }
    return null;
}
exports["default"] = Home;
