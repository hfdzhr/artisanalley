<template>
  <div class="contact-page  pt-20 bg-amber-50">
    <div class="font-sans text-base text-gray-900 sm:px-10">
      <div class="text-base text-gray-900">
        <div
          class="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
        >
          <div class="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
            <h1 class="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">
              Kontak Kami
            </h1>
            <div class="text-lg sm:text-xl xl:text-xl">
              <div class="text-gray-900">
                <p class="mb-4">
                  Hubungi Kami Jika Ada Pertanyaan 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden   text-gray-900 md:flex-row md:border md:shadow-lg"
      >
        <form
          class="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8"
        >
          <div class="mb-4">
            <label class="text mb-2 block font-medium" for="email"
              >Your e-mail:</label
            ><input
              class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-amber-950 focus:ring"
              id="subject"
              type="subject"
              required=""
            />
          </div>
          <div class="mb-4">
            <label class="text mb-2 block font-medium" for="subject"
              >Subject:</label
            ><input
              class="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-amber-950 focus:ring"
              id="subject"
              type="subject"
              required=""
            />
          </div>
          <div class="mb-4">
            <label class="text mb-2 block font-medium" for="message"
              >Message:</label
            ><textarea
              class="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none focus:ring  ring-amber-950  "
              id="subject"
              required=""
            ></textarea>
          </div>
          <div class="flex items-center">
            <div class="flex-1"></div>
            <button
              class=" bg-amber-950 px-4 py-3 text-center font-bold text-white hover:bg-amber-900"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
        <div
          class="mt-10 bg-amber-950 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto"
        >
          <div class="">
            <p class="mb-4 font-medium border-b pb-2">OFFICE HOURS</p>
            <p class="mb-4">Monday – Thursday: 08:00 – 16:00</p>
            <p class="mb-4">Friday: 08:00 - 15:00</p>
            <p class="mb-4">Weekend: Closed</p>
            <p class="mb-4">
              Email:
              <a href="#" class="font-semibold underline">support@apps.io</a>
            </p>
            <p class="mb-4">
              Phone:
              <a href="#" class="font-semibold underline"
                >+46 (0) 10-32 32 322</a
              >
            </p>
            <hr
              class="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300"
            />
            <p class="mb-4">Org.no: 63452-2832</p>
            <p class="mb-4">VAT no: 32353</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
