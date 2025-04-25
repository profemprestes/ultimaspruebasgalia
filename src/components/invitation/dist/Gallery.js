"use client";
"use strict";
exports.__esModule = true;
exports.Gallery = void 0;
var react_1 = require("react");
var use_gallery_1 = require("@/hooks/use-gallery");
var lucide_react_1 = require("lucide-react");
var framer_motion_1 = require("framer-motion");
require("@/styles/intro-section.css");
exports.Gallery = function (_a) {
    var images = _a.images;
    var _b = use_gallery_1.useGallery(images.length), currentImageIndex = _b.currentImageIndex, goToPreviousImage = _b.goToPreviousImage, goToNextImage = _b.goToNextImage, goToImage = _b.goToImage;
    var _c = react_1.useState(0), direction = _c[0], setDirection = _c[1];
    var _d = react_1.useState(true), isLoading = _d[0], setIsLoading = _d[1];
    // Manejar la dirección de la transición
    var handlePrevious = function () {
        setDirection(-1);
        goToPreviousImage();
    };
    var handleNext = function () {
        setDirection(1);
        goToNextImage();
    };
    var handleDotClick = function (index) {
        setDirection(index > currentImageIndex ? 1 : -1);
        goToImage(index);
    };
    // Simular carga de imagen
    react_1.useEffect(function () {
        setIsLoading(true);
        var img = new Image();
        img.src = images[currentImageIndex].src;
        img.onload = function () {
            setIsLoading(false);
        };
    }, [currentImageIndex, images]);
    // Variantes para las animaciones
    var slideVariants = {
        enter: function (direction) { return ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }); },
        center: {
            x: 0,
            opacity: 1
        },
        exit: function (direction) { return ({
            x: direction < 0 ? 300 : -300,
            opacity: 0
        }); }
    };
    return (react_1["default"].createElement("div", { className: "gallery-component" },
        react_1["default"].createElement("div", { className: "image-container" },
            react_1["default"].createElement(framer_motion_1.AnimatePresence, { initial: false, custom: direction, mode: "wait" }, isLoading ? (react_1["default"].createElement(framer_motion_1.motion.div, { key: "loader", className: "image-loader", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
                react_1["default"].createElement("div", { className: "loader-spinner" }))) : (react_1["default"].createElement(framer_motion_1.motion.div, { key: currentImageIndex, custom: direction, variants: slideVariants, initial: "enter", animate: "center", exit: "exit", transition: {
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                }, className: "image-wrapper" },
                react_1["default"].createElement("img", { src: images[currentImageIndex].src, alt: images[currentImageIndex].caption, className: "gallery-image", loading: "lazy", width: 800, height: 600 }),
                react_1["default"].createElement(framer_motion_1.motion.div, { className: "image-caption", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 } }, images[currentImageIndex].caption))))),
        react_1["default"].createElement("div", { className: "navigation-buttons" },
            react_1["default"].createElement(framer_motion_1.motion.button, { className: "nav-button", onClick: handlePrevious, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 } },
                react_1["default"].createElement(lucide_react_1.ChevronLeft, null)),
            react_1["default"].createElement(framer_motion_1.motion.button, { className: "nav-button", onClick: handleNext, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 } },
                react_1["default"].createElement(lucide_react_1.ChevronRight, null))),
        react_1["default"].createElement("div", { className: "navigation-dots" }, images.map(function (_, index) { return (react_1["default"].createElement(framer_motion_1.motion.button, { key: index, className: "dot " + (index === currentImageIndex ? "active" : ""), onClick: function () { return handleDotClick(index); }, whileHover: { scale: 1.2 }, whileTap: { scale: 0.9 }, initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 * index } })); }))));
};
