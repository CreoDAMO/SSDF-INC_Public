const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  revealEls.forEach((el) => observer.observe(el));
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => el.classList.add("in"));
  }, 2500);
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

async function bootCodes() {
  const table = document.getElementById("codeRows");
  const detail = document.getElementById("codeDetail");
  const search = document.getElementById("codeSearch");
  const count = document.getElementById("codeCount");
  if (!table || !detail) return;

  const res = await fetch("/federal/codes.json");
  const codes = await res.json();
  let kind = "ALL";
  let delivery = "ALL";
  let lane = "ALL";
  let selected = null;

  const chips = document.querySelectorAll("[data-filter]");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const group = chip.getAttribute("data-group");
      const value = chip.getAttribute("data-filter");
      document
        .querySelectorAll(`[data-group="${group}"]`)
        .forEach((c) => c.classList.toggle("on", c === chip));
      if (group === "kind") kind = value;
      if (group === "delivery") delivery = value;
      if (group === "lane") lane = value;
      render();
    });
  });
  if (search) search.addEventListener("input", render);

  function matchDelivery(code) {
    if (delivery === "ALL") return true;
    if (delivery === "CONDITIONAL") return Boolean(code.conditional);
    if (delivery === "FULFILLMENT") {
      return code.delivery === "Qualified fulfillment" || code.delivery === "Contract-specific";
    }
    return (
      code.delivery === "Direct" ||
      code.delivery === "Direct + specialized resources" ||
      code.delivery === "Direct / qualified partner"
    );
  }

  function rows() {
    const q = (search?.value || "").trim().toLowerCase();
    return codes.filter((code) => {
      if (kind !== "ALL" && code.kind !== kind) return false;
      if (lane !== "ALL" && code.lane !== lane && !(code.alsoLanes || []).includes(lane)) return false;
      if (!matchDelivery(code)) return false;
      if (!q) return true;
      return [code.code, code.title, code.capability, code.organLabel, code.delivery, code.why]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }

  function short(model) {
    if (model === "Direct + specialized resources") return "Direct + resources";
    if (model === "Direct / qualified partner") return "Direct / partner";
    if (model === "Qualified fulfillment") return "Fulfillment";
    return model;
  }

  function render() {
    const list = rows();
    if (count) count.textContent = `${list.length} of ${codes.length} codes`;
    table.innerHTML = list
      .map((code) => {
        const on = selected === code.code ? "on" : "";
        return `<tr class="${on}" data-code="${code.code}">
          <td><div class="code-num">${code.code}</div><div class="source-note">${code.kind}${code.conditional ? " · cond." : ""}</div></td>
          <td>${code.capability}</td>
          <td>${code.organLabel}</td>
          <td class="kind-label">${short(code.delivery)}</td>
        </tr>`;
      })
      .join("");
    table.querySelectorAll("tr").forEach((tr) => {
      tr.addEventListener("click", () => {
        selected = tr.getAttribute("data-code");
        const code = codes.find((c) => c.code === selected);
        show(code);
        render();
      });
    });
  }

  function show(code) {
    if (!code) {
      detail.innerHTML =
        "<p class='section-lede'>Select a code to inspect why SSDF carries it, what the actual deliverable is, and which restrictions apply.</p>";
      return;
    }
    detail.innerHTML = `
      <p class="cap-tag">${code.kind} · Lane ${code.lane}</p>
      <h3>${code.code}</h3>
      <p class="section-lede">${code.title}</p>
      <p><strong>Capability.</strong> ${code.capability}</p>
      <p><strong>Organ.</strong> ${code.organLabel}</p>
      <p><strong>Delivery.</strong> ${code.delivery}</p>
      <p><strong>Why.</strong> ${code.why}</p>
      <p><strong>Deliverable.</strong> ${code.deliverable}</p>
      <p><strong>Restrictions.</strong> ${code.restrictions}</p>`;
  }

  render();
}

bootCodes().catch(() => {});
