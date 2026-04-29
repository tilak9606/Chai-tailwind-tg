export function apply(css) {
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
}

export function extract() {
  const html = document.body.innerHTML;

  const matches = html.match(/class="([^"]+)"/g) || [];

  const classes = matches.flatMap(item =>
    item.replace('class="', '').replace('"', '').split(" ")
  );

  return [...new Set(classes)];
}

export function generate(classes) {
  let css = "";

  const utilities = {
    "chai-bg-primary": `
      .chai-bg-primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); }
    `,

    "chai-bg-dark": `
      .chai-bg-dark { background-color: #0f172a; }
    `,

    "chai-bg-light": `
      .chai-bg-light { background-color: #f8fafc; }
    `,

    "chai-text-primary": `
      .chai-text-primary { color: #6366f1; }
    `,

    "chai-text-dark": `
      .chai-text-dark { color: #0f172a; }
    `,

    "chai-text-light": `
      .chai-text-light { color: #f8fafc; }
    `,

    "chai-text-muted": `
      .chai-text-muted { color: #94a3b8; }
    `,

    "chai-flex": `
      .chai-flex { display: flex; }
    `,

    "chai-flex-center": `
      .chai-flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,

    "chai-flex-col": `
      .chai-flex-col { display: flex; flex-direction: column; }
    `,

    "chai-flex-row": `
      .chai-flex-row { display: flex; flex-direction: row; }
    `,

    "chai-flex-wrap": `
      .chai-flex-wrap { display: flex; flex-wrap: wrap; }
    `,

    "chai-flex-nowrap": `
      .chai-flex-nowrap { display: flex; flex-wrap: nowrap; }
    `,

    "chai-justify-start": `
      .chai-justify-start { justify-content: flex-start; }
    `,
    "chai-justify-center": `
      .chai-justify-center { justify-content: center; }
    `,
    "chai-justify-end": ` 
        .chai-justify-end { justify-content: flex-end; }
    `,

    "chai-items-start": `
      .chai-items-start { align-items: flex-start; }
    `,

    "chai-items-center": `
      .chai-items-center { align-items: center; }
    `,

    "chai-items-end": `
      .chai-items-end { align-items: flex-end; }
    `,

    "chai-align-start": `
      .chai-align-start { align-items: flex-start; }
    `,

    "chai-align-center": `
      .chai-align-center { align-items: center; }
    `,

    "chai-align-end": `
      .chai-align-end { align-items: flex-end; }
    `,

    "chai-grid": `
      .chai-grid { display: grid; }
    `,

    "chai-grid-cols-2": `
      .chai-grid-cols-2 { display: grid; grid-template-columns: repeat(2, 1fr); }
    `,

    "chai-grid-cols-3": `
      .chai-grid-cols-3 { display: grid; grid-template-columns: repeat(3, 1fr); }
    `,

    "chai-grid-cols-4": `
      .chai-grid-cols-4 { display: grid; grid-template-columns: repeat(4, 1fr); }
    `,

    "chai-grid-rows-2": `
      .chai-grid-rows-2 { display: grid; grid-template-rows: repeat(2, 1fr); }
    `,

    "chai-grid-rows-3": `
      .chai-grid-rows-3 { display: grid; grid-template-rows: repeat(3, 1fr); }
    `,

    "chai-grid-rows-4": `
      .chai-grid-rows-4 { display: grid; grid-template-rows: repeat(4, 1fr); }
    `,

    "chai-stack": `
      .chai-stack > * + * { margin-top: 12px; }
    `,

    "chai-rounded": `
      .chai-rounded { border-radius: 8px; }
    `,

    "chai-rounded-lg": `
      .chai-rounded-lg { border-radius: 12px; }
    `,

    "chai-rounded-xl": `
      .chai-rounded-xl { border-radius: 16px; }
    `,

    "chai-rounded-2xl": `
      .chai-rounded-xl { border-radius: 20px; }
    `,

    "chai-rounded-full": `
      .chai-rounded-full { border-radius: 9999px; }
    `,

    "chai-border": `
      .chai-border { border: 1px solid #e5e7eb; }
    `,

    "chai-border-primary": `
      .chai-border-primary { border: 1px solid #6366f1; }
    `,

    "chai-border-dark": `
      .chai-border-dark { border: 1px solid #0f172a; }
    `,

    "chai-border-light": `
      .chai-border-light { border: 1px solid #f8fafc; }
    `,

    "chai-shadow-soft": `
      .chai-shadow-soft { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
    `,

    "chai-shadow-glow": `
      .chai-shadow-glow { box-shadow: 0 0 20px rgba(99,102,241,0.6); }
    `,

    "chai-font-bold": `
      .chai-font-bold { font-weight: 700; }
    `,

    "chai-uppercase": `
      .chai-uppercase { text-transform: uppercase; }
    `,

    "chai-lowercase": `
      .chai-lowercase { text-transform: lowercase; }
    `,

    "chai-capitalize": `
      .chai-capitalize { text-transform: capitalize; }
    `,

    "chai-fade-in": `
      .chai-fade-in { animation: chaiFadeIn 0.6s ease forwards; }
      @keyframes chaiFadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `,

    "chai-slide-up": `
      .chai-slide-up { animation: chaiSlideUp 0.5s ease-out; }
      @keyframes chaiSlideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `,

    "chai-bounce": `
      .chai-bounce { animation: chaiBounce 1s infinite; }
      @keyframes chaiBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `,

    "chai-glow-pulse": `
      .chai-glow-pulse { animation: chaiGlowPulse 2s infinite; }
      @keyframes chaiGlowPulse {
        0% { box-shadow: 0 0 0 rgba(99,102,241,0.4); }
        50% { box-shadow: 0 0 20px rgba(99,102,241,0.9); }
        100% { box-shadow: 0 0 0 rgba(99,102,241,0.4); }
      }
    `,

    "chai-btn": `
      .chai-btn {
        position: relative;
        padding: 12px 28px;
        border-radius: 12px;
        font-weight: 600;
        color: white;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        cursor: pointer;
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .chai-btn:hover {
        transform: translateY(-2px) scale(1.03);
        box-shadow: 0 10px 25px rgba(119, 93, 213, 0.4);
      }

      .chai-btn:active {
        transform: scale(0.97);
      }

      .chai-btn::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent);
        transform: translateX(-100%);
        transition: transform 0.6s;
      }

      .chai-btn:hover::before {
        transform: translateX(100%);
      }
    `,

    "chai-card-glass": `
      .chai-card-glass {
        backdrop-filter: blur(14px);
        background: rgba(255,255,255,0.08);
        border-radius: 16px;
        padding: 20px;
        border: 1px solid rgba(255,255,255,0.15);
        transition: all 0.3s ease;
      }

      .chai-card-glass:hover {
        transform: translateY(-6px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.2);
      }
    `,

    "chai-card": `
      .chai-card {
        background: #ffffff;
        border-radius: 16px;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
      }

      .chai-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 50px rgba(0,0,0,0.2);
      }
    `,

    "chai-hover-lift": `
      .chai-hover-lift { transition: transform 0.3s ease; }
      .chai-hover-lift:hover { transform: translateY(-5px); }
    `,

    "chai-hover-scale": `
      .chai-hover-scale { transition: transform 0.3s ease; }
      .chai-hover-scale:hover { transform: scale(1.05); }
    `
  };

  classes.forEach(cls => {

    if (utilities[cls]) {
      css += utilities[cls];
      return;
    }

    if (cls.startsWith("chai-p-")) {
      const val = parseInt(cls.split("-")[2]);
      if (!isNaN(val)) {
        css += `.chai-p-${val} { padding: ${val * 4}px; }\n`;
      }
    }

    if (cls.startsWith("chai-m-")) {
      const val = parseInt(cls.split("-")[2]);
      if (!isNaN(val)) {
        css += `.chai-m-${val} { margin: ${val * 4}px; }\n`;
      }
    }

    if (cls.startsWith("chai-text-")) {
      const val = parseInt(cls.split("-")[2]);
      if (!isNaN(val)) {
        css += `.chai-text-${val} { font-size: ${val}px; }\n`;
      }
    }

  });

  return css;
}