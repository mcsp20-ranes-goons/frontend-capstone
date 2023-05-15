function Specifications() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">Specifications</h1>
      <div className="flex flex-col bg-neutral-800 py-9 px-16">
        {/*container*/}
        <div className="flex">{/*header-container*/}
          <button className="flex border-b-4 transition-all ease-linear hover:border-neutral-400">{/*windows*/}
            <span className="font-bold my-5">WINDOWS</span>
          </button>
          <div className="mb-[0.1rem] w-full border-b border-neutral-700"></div>
        </div>
        <div className="flex flex-row justify-between mt-10">
          {/*specs*/}
          <div className="flex flex-col gap-10">
            {/*minimum*/}
            <span className="text-neutral-400">MINIMUM</span>
            <div className="flex flex-col">
              {/*OS*/}
              <span className="text-neutral-400">OS</span>
              <span>Windows 10 64-bit</span>
            </div>
            <div className="flex flex-col">
              {/*Processor*/}
              <span className="text-neutral-400">Processor</span>
              <span>
                4 core / 8 threads | Intel Core i7-7700 | Ryzen 5 1400
              </span>
            </div>
            <div className="flex flex-col">
              {/*memory*/}
              <span className="text-neutral-400">Memory</span>
              <span>8 GB</span>
            </div>
            <div className="flex flex-col">
              {/*storage*/}
              <span className="text-neutral-400">Storage</span>
              <span>155 GB</span>
            </div>
            <div className="flex flex-col">
              {/*direct x*/}
              <span className="text-neutral-400">Direct X</span>
              <span>12</span>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {/*recommended*/}
            <span className="text-neutral-400">RECOMMENDED</span>
            <div className="flex flex-col">
              {/*OS*/}
              <span className="text-neutral-400">OS</span>
              <span>Windows 10 64-bit</span>
            </div>
            <div className="flex flex-col">
              {/*Processor*/}
              <span className="text-neutral-400">Processor</span>
              <span>
                4 core / 8 threads | Intel Core i5 11600K | Ryzen 5 5600X
              </span>
            </div>
            <div className="flex flex-col">
              {/*memory*/}
              <span className="text-neutral-400">Memory</span>
              <span>16 GB</span>
            </div>
            <div className="flex flex-col">
              {/*storage*/}
              <span className="text-neutral-400">Storage</span>
              <span>155 GB</span>
            </div>
            <div className="flex flex-col">
              {/*direct x*/}
              <span className="text-neutral-400">Direct X</span>
              <span>12</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10">
          {/*logins*/}
          <span className="text-neutral-400">logins</span>
          <span>Requires EA Origin account</span>
        </div>
        <div className="flex flex-col mt-10 pb-10 border-b border-neutral-700">
          {/*languages*/}
          <span className="text-neutral-400">Languages Supported</span>
          <span>AUDIO: English, Italian, French, German, Spanish - Spain, Spanish - Latin America, Polish, Japanese, Portuguese - Brazil</span>
          <span className="max-w-4xl">TEXT: English, French, Italian, German, Spanish - Latin America, Spanish - Spain, Portuguese - Brazil, Polish, Japanese, Korean, Chinese - Simplified, Chinese - Traditional</span>
        </div>
        <div className="flex flex-col items-center mt-10">
          {/*privacyPolicy*/}
          <span className="text-center text-neutral-400 max-w-4xl">
            Internet connection, EA Account, Epic Games Account, acceptance of
            the EA User Agreement (terms.ea.com), and installation of the EA app
            (ea.com/ea-app) are required to play. EA’s Privacy and Cookie Policy
            (privacy.ea.com) applies to your use of EA’s Services. You consent
            to any personal data collected through your use of EA's services
            being transferred to the United States, as further explained in the
            Privacy & Cookie Policy. EA online activation is required. You must
            link your EA Account to your Epic Games account to play. EA will
            share your Account ID and individual game and play records with Epic
            Games to validate your purchases and/or refund requests. Access to
            software content is limited to one EA & one Epic Games Account & is
            non-transferable after purchase. You may need to be 13+ or 16+ to
            register for an EA Account and to access online features (age may
            vary, see o.ea.com/ea/child-access for details). Some content may
            require gameplay to unlock. Mandatory content updates may be
            downloaded automatically, require additional storage, and incur
            bandwidth usage fees. EA may provide certain free incremental
            content &/or updates. Software incorporates 3rd party Digital Rights
            Management (DRM). EA User Agreement: terms.ea.com/de for German
            residents and terms.ea.com for all other residents EA Privacy &
            Cookie Policy: privacy.ea.com/de for German residents and
            privacy.ea.com for all other residents Lucasfilm, the Lucasfilm
            logo, STAR WARS and related properties are trademarks and/or
            copyrights, in the United States and other countries, of Lucasfilm
            Ltd. and/or its affiliates. © & TM 2023 Lucasfilm Ltd. All rights
            reserved.
          </span>
          <a href="https://www.ea.com/legal" target="_blank">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Specifications;
