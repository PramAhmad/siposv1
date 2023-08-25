<template>
    <div class="bg-white font-poppins">
        <nav class="bg-white py-3.5 px-7 md:flex items-center justify-between w-full fixed">

            <!-- brand -->
            <div class="text-xl text-blue-400 font-bold leading-3 pl-3">
                <div title="Beranda Sistem Informasi">
                    <a href="index.html">
                        <h1 class="text-2xl indent-3">SISTEM</h1>
                        <h1>INFORMASI</h1>
                    </a>
                </div>
            </div>

            <!-- menu -->
            <ul class="text-sm font-medium text-slate-700 md:flex md:static absolute bg-white top-16 left-0 pl-14">
                <li class="md:mx-4 mx-44 md:my-0 my-4 py-2 hover:text-blue-400"><a href="index.html">BERANDA</a></li>
                <li class="md:mx-4 mx-44 md:my-0 my-4 py-2 hover:text-blue-400"><a href="event.html">EVENTS</a></li>
                <li class="md:mx-4 mx-44 md:my-0 my-4 py-2 hover:text-blue-400"><a href="student.html">MAHASISWA</a>
                </li>
                <li class="md:mx-4 mx-44 md:my-0 my-4 py-2 hover:text-blue-400"><a href="contact.html">KONTAK</a></li>
                <li>
                    <button
                        class="md:mx-4 mx-44 md:my-0 my-4 py-2 px-3 font-semibold rounded-md shadow-md bg-yellow-300 bg-fixed hover:bg-yellow-400">LOGIN</button>
                </li>
                <li>
                    <!-- darkmode -->
                    <div class="md:mx-4 mx-44 md:my-0 my-2 border-l-2 border-slate-400 md:justify-self-end">
                        <div class="ml-7 my-1 w-7 h-7 bg-slate-400 rounded-full"></div>
                    </div>
                </li>
            </ul>
        </nav>

        <section class="grid grid-cols-2 pt-16 pl-9">
            <div class="col-span-1">
                <!-- <div class="bg-cover w-[400px] h-[580px] ml-12" style="background-image: url(assets/image/simaskot.png);"> -->
                <!-- </div> -->
                <div class="bg-cover w-[400px] h-[580px] ml-12">

                    <img src="~/assets/image/simaskot.png" alt="">
                </div>
            </div>
            <div class="col-span-1">
                <h1 class="font-bold text-2xl text-blue-400 pl-1 pt-24">SELAMAT DATANG DI</h1>
                <h1 class="font-bold text-5xl text-blue-400">SISTEM INFORMASI<br>UNSIL</h1>

                <form @submit.prevent="login" class="mt-10 ml-40">
                    <label>
                        <span
                            class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">username</span>
                        <input type="text"
                            class="mt-1 px-3 py-2 w-72 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                            placeholder="masukan username" v-model="username" />
                    </label>
                    <label>
                        <span
                            class="mt-6 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">password</span>
                        <input type="password"
                            class="mt-1 px-3 py-2 w-72 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                            placeholder="masukan password" v-model="password" />
                    </label>
                    <button type="submit"
                        class="ml-52 my-6 px-4 py-2 rounded-md shadow-md bg-yellow-300 font-semibold text-slate-800 hover:bg-yellow-400">Masuk</button>
                </form>
            </div>
        </section>
    </div>
</template>
<script setup>
const supabase = useSupabaseAuthClient();
const supa = useSupabaseUser();
const username = ref();
const password = ref();
const mail = ref("@mail.com")
const login = async () => {
    const { user, error } = await supabase.auth.signInWithPassword({
        email: username.value + mail.value,
        password: password.value,
    })
    if (user) {
        navigateTo("/");
        console.log(supa)
    }
    else {
        console.log(error)
    }
}
</script>
<style lang="">
    
</style>