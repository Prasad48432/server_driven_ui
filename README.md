# 🚀 Server Driven UI

**An entry for the TechSurf Hackathon by TechStack**

Server Driven UI (SDUI) is a flexible and dynamic architecture that allows the server to control and render the user interface on the client. This approach brings a powerful shift in how UIs are built and updated—without requiring frequent client-side deployments.

---

## 🧠 Motivation

In traditional frontend development, even minor UI changes require client updates. This project was built to:
- Improve iteration speed
- Enable real-time UI updates without re-deployments
- Achieve greater consistency across platforms

---

## 🔨 Features

- 🧩 **JSON-based UI definitions**
- ⚡ **Real-time UI updates** from the server
- 🛠️ **Component rendering engine** on the client side
- 🧘 **Low-code/No-code ready**
- 🌐 Built using [NextJS, ContentStack CMS, Tailwind CSS]

---

## 📦 Tech Stack

- **Frontend:** [React / Next.js]
- **Backend:** [Contenstack CMS]
- **Others:** [TailwindCSS]

---

## 🧪 How It Works

1. The **client** fetches UI layout and behavior in JSON format.
2. The **server** defines components, layouts, and actions.
3. The **client renders** the UI based on server instructions.

```json
{
  "type": "button",
  "props": {
    "text": "Click Me",
    "action": "submit_form"
  }
}
