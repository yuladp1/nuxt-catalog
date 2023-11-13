<template>
    <div>
        <!-- <input type="hidden" name="access_key" value="b1bd2a1f-b25d-4cf6-a466-2df3ff79e11d"> -->

        <div class="flex items-center min-h-screen bg-gray-50">
            <div class="container mx-auto">
                <div class="max-w-md mx-auto my-3 bg-white p-5 rounded-md shadow-sm">
                    <div class="text-center">
                        <h1 class="my-3 text-3xl font-semibold text-gray-700">
                            Please, feel free to contact with me:
                        </h1>
                        <p class="text-gray-400 dark:text-gray-400">
                            Fill up the form below:
                        </p>
                    </div>
                    <div class="m-7">
                        <form action="https://api.web3forms.com/submit" method="POST" id="form">
                            <input type="hidden" name="access_key" value="b1bd2a1f-b25d-4cf6-a466-2df3ff79e11d" />
                            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                            <input type="checkbox" name="botcheck" id="" style="display: none;" />
                            <div class="mb-6">
                                <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your
                                    Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email
                                    Address</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div class="mb-6">
                                <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
                                <input type="text" name="phone" id="phone" placeholder="+1 (555) 1234-567" required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your
                                    Message</label>

                                <textarea rows="5" name="message" id="message" placeholder="Your Message"
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                    required></textarea>
                            </div>
                            <div class="mb-6">
                                <button type="submit"
                                    class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                                    Send Message
                                </button>
                            </div>
                            <p class="text-base text-center text-gray-400" id="result"></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'contacts'
})
</script>

<style scoped></style>