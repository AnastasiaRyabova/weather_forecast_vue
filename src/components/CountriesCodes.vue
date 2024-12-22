<template></template>

<script>
import Papa from 'papaparse';

export default {

    data() {
        return {
            allCountriesCities: [],
            allCountriesCodes: [],
        }
    },

    async beforeMount() {
        await this.initialInit();
        this.$emit('getCodes', this.allCountriesCodes, this.allCountriesCities);
    },


    methods: {
        async initialInit() {
            this.allCountriesCities = await this.parseCSV('https://practicaldeveloper.github.io/weather_forecast_vue/files/allCitiesWithRus.csv');
            this.allCountriesCodes = await this.parseCSV('https://practicaldeveloper.github.io/weather_forecast_vue/files/allCountriesWithRus.csv');
        },

        async parseCSV(fileCSV) {
            return new Promise(resolve => {
                Papa.parse(fileCSV, {
                    header: false,
                    download: true,
                    complete: (results) => {
                        resolve(results.data);
                    }
                });
            });
        }
    }

}
</script>

<style></style>