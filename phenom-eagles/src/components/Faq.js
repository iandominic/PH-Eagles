import React from 'react'
import 'tw-elements';

const Faq = () => {
  return (
    <section className="faq__section w-full h-full pb-24">
      <h1 className="text-4xl text-center pt-[4rem] pb-[5rem] faq__title">FAQ</h1>
      <div class="w-[90%] bg-transparent m-auto" id="accordionExample">
        <div class="accordion-item bg-white border-white bg-transparent">
          <h2 class="accordion-header mb-0" id="headingOne">
            <button class=" 
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              text-base text-white text-left font-bold
              faq__question
              bg-transparent
              transition
              focus:outline-none
            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
              aria-controls="collapseOne">
              WHERE CAN I VIEW MY NFTS?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body py-4">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
          <div class="accordion-item bg-white  border-white bg-transparent">
            <h2 class="accordion-header mb-0" id="headingTwo">
              <button class="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                text-base text-white text-left font-bold
                faq__question
                bg-transparent
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                aria-controls="collapseTwo">
                WHAT IS METAVERSE?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-4">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white  border-white bg-transparent">
            <h2 class="accordion-header mb-0" id="headingThree">
              <button class="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                text-base text-white text-left font-bold
                faq__question
                bg-transparent
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                aria-controls="collapseThree">
                HOW CAN I USE MY NFTS?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-4">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white  border-white bg-transparent">
            <h2 class="accordion-header mb-0" id="headingFour">
              <button class="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                text-base text-white text-left font-bold
                faq__question
                bg-transparent
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                aria-controls="collapseFour">
                WHAT IS PHENOM EAGLES?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-4">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white  border-white bg-transparent">
            <h2 class="accordion-header mb-0" id="headingFive">
              <button class="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                text-base text-white text-left font-bold
                faq__question
                bg-transparent
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                aria-controls="collapseFive">
                WHY DO WE NEED TO MINT AN EAGLE?
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-4">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white  border-white bg-transparent">
            <h2 class="accordion-header mb-0" id="headingSix">
              <button class="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                text-base text-white text-left font-bold
                faq__question
                bg-transparent
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                aria-controls="collapseSix">
                HOW MUCH IS THE MINTING COST?
              </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-4">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white  border-white bg-transparent">
            <h2 class="accordion-header mb-0" id="headingSeven">
              <button class="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                text-base text-white text-left font-bold
                faq__question
                bg-transparent
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                aria-controls="collapseSeven">
                WHEN IS THE LAUNCH DATE?
              </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-4">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white  border-white bg-transparent">
            <h2 class="accordion-header mb-0" id="headingEight">
              <button class="
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                text-base text-white text-left font-bold
                faq__question
                bg-transparent
                transition
                focus:outline-none
              " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                aria-controls="collapseSeven">
                WHY DID YOU USE EAGLES?
              </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight"
              data-bs-parent="#accordionExample">
              <div class="accordion-body py-4">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq