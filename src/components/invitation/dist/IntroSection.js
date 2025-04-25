"use client";
"use strict";
exports.__esModule = true;
exports.IntroSection = void 0;
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var Gallery_1 = require("@/components/invitation/Gallery");
var framer_motion_1 = require("framer-motion");
require("@/styles/intro-section.css");
var images = [
    {
        src: "/GaliaFoto.png",
        caption: "Mi primer añito"
    },
    {
        src: "/galia/galiahamaca.webp",
        caption: "Momentos especiales"
    },
    {
        src: "/galia/galiamaurogime.webp",
        caption: "Sonrisas de Galia"
    },
    {
        src: "/galia/galiamaurogimeauto.webp",
        caption: "Celebrando juntos"
    },
];
exports.IntroSection = function (_a) {
    var onProceed = _a.onProceed;
    var _b = react_1.useState(false), isVisible = _b[0], setIsVisible = _b[1];
    react_1.useEffect(function () {
        // Añadir un pequeño retraso para la animación de entrada
        var timer = setTimeout(function () {
            setIsVisible(true);
        }, 300);
        return function () { return clearTimeout(timer); };
    }, []);
    return (react_1["default"].createElement("div", { className: "intro-section" },
        react_1["default"].createElement("div", { className: "background-animation" },
            react_1["default"].createElement("img", { src: "/img/daisy.png", alt: "Margarita", className: "daisy daisy-1 floating" }),
            react_1["default"].createElement("img", { src: "/img/balloon2.jpg", alt: "Globo", className: "balloon balloon-1 floating-slow" }),
            react_1["default"].createElement("img", { src: "/img/balloon2.jpg", alt: "Globo", className: "balloon balloon-2 floating-medium" }),
            react_1["default"].createElement("img", { src: "/img/balloon1.svg", alt: "Globo", className: "balloon balloon-3 floating-fast" }),
            react_1["default"].createElement("img", { src: "/img/daisy.png", alt: "Margarita", className: "daisy daisy-2 floating-reverse" }),
            react_1["default"].createElement("div", { className: "confetti confetti-1" }),
            react_1["default"].createElement("div", { className: "confetti confetti-2" }),
            react_1["default"].createElement("div", { className: "confetti confetti-3" }),
            react_1["default"].createElement("div", { className: "confetti confetti-4" })),
        react_1["default"].createElement(framer_motion_1.motion.div, { className: "intro-content", initial: { opacity: 0, y: 20 }, animate: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }, transition: { duration: 0.8, ease: "easeOut" } },
            react_1["default"].createElement(framer_motion_1.motion.header, { className: "intro-header", initial: { opacity: 0, y: -20 }, animate: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
                react_1["default"].createElement("h1", { className: "intro-title" }, "\u00A1Celebra conmigo!"),
                react_1["default"].createElement(framer_motion_1.motion.div, { className: "badge", initial: { scale: 0 }, animate: { scale: isVisible ? 1 : 0 }, transition: { duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 } }, "1 a\u00F1ito")),
            react_1["default"].createElement(framer_motion_1.motion.p, { className: "intro-description", initial: { opacity: 0 }, animate: { opacity: isVisible ? 1 : 0 }, transition: { duration: 0.8, delay: 0.4, ease: "easeOut" } }, "Galia est\u00E1 cumpliendo su primer a\u00F1ito y quiere compartir este d\u00EDa tan especial contigo"),
            react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } },
                react_1["default"].createElement(Gallery_1.Gallery, { images: images })),
            react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }, transition: { duration: 0.8, delay: 0.8, ease: "easeOut" }, className: "button-container" },
                react_1["default"].createElement(button_1.Button, { onClick: onProceed, className: "proceed-button" }, "Entrar a la invitaci\u00F3n")))));
};
