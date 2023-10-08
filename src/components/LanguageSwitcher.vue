<script setup>
    import { useI18n } from 'vue-i18n'
    import Tr from "@/i18n/translation"
    import { useRouter } from "vue-router"

    const { t, locale } = useI18n()

    const supportedLocales = Tr.supportedLocales

    const router = useRouter()

    const switchLanguage = async (event) => {
        const newLocale = event.target.value

        await Tr.switchLanguage(newLocale)

        try {
            await router.replace({ params: { locale: newLocale } })
        } catch(e) {
          console.log(e)
          router.push("/")
        }
    }

    
</script>

<template>
    <div class="custom-select">
        <select @change="switchLanguage">
            <option
                v-for="sLocale in supportedLocales"
                :key="`locale-${sLocale}`"
                :value="sLocale"
                :selected="locale === sLocale"
            >
            {{ t("locale." + sLocale) }}
            </option>
        </select>

    </div>
</template>

<style scoped lang="scss">
    
    select {
        padding-left: 3px;
        font-size: 1.3rem;

        option {
            padding-left: 3px;
        }
    }
</style>
