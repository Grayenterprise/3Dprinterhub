export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <h1>3D Printer Hub</h1>
      <p>
        A community platform to find public 3D printers, buy printers, and connect with makers.
      </p>

      <hr />

      <h2>Find Public 3D Printers</h2>
      <ul>
        <li>
          <strong>SF Makerspace</strong><br />
          San Francisco, CA<br />
          $0.10 / gram — FDM, SLA
        </li>
        <li>
          <strong>NYC Library Print Hub</strong><br />
          New York, NY<br />
          $0.15 / gram — FDM
        </li>
      </ul>

      <hr />

      <h2>Buy a 3D Printer</h2>
      <ul>
        <li><a href="https://www.prusa3d.com" target="_blank">Prusa Research</a></li>
        <li><a href="https://www.bambulab.com" target="_blank">Bambu Lab</a></li>
        <li><a href="https://www.creality.com" target="_blank">Creality</a></li>
      </ul>

      <hr />

      <h2>Community (Coming Soon)</h2>
      <p>
        Soon you’ll be able to post what you want printed and receive bids from printer owners.
      </p>
    </main>
  );
}

