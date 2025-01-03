export const extensionsMixin = {
  created() {

  },
  data() {
      return {

      }
    },
    methods: {
      elementById(id) {
          return this.$el.querySelector(id);
        },

        convertToCelsius(val)
        {
            return Math.round((val - 273).toFixed(2));
        },

        addDays (date, days) {
            var date = new Date(date);
            date.setDate(date.getDate() + days);
            return date;
        },

        dateWithoutTime (date) {
          var date = new Date(date);
          return date.setHours(0,0,0,0);
        },

        getRootVarCSS (varName) {
          let root = document.querySelector(':root');
          let rootStyles = getComputedStyle(root);
          return rootStyles.getPropertyValue(varName);
  
        },

        setRootVarCSS (varName, value) {
          document.documentElement.style.setProperty(varName, value);
  
        }
    }
}