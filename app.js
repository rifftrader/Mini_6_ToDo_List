new Vue({
    el: "#app",

    data: {

        newItem: "",
        listItems: ["Don't catch COVID-19.", "Wear a mask around your snout.", "Read a load of conspiracy theory posts on social media."],
        completedItems: [],
        allItems: [],
        toggleText: "Show Completed Tasks",
        showCurrent: true,
        statusUpdate: "",
        showStatusUpdate: false

    },

    methods: {

        addNewItem: function () {
            this.showStatusUpdate = false;
            this.listItems.push(this.newItem);
            this.newItem = "";
        },

        deleteItem: function (index) {
            this.$delete(this.listItems, index);

        },

        itemCompleted: function (index) {
            this.completedItems.push(this.listItems[index]);
            this.$delete(this.listItems, index);
        },

        deleteAll: function () {

            if (this.listItems.length == 0) {
                this.statusUpdate = "Cannot delete any tasks unless you create some first.";
            } else {
                this.listItems = [];
                this.statusUpdate = "All tasks deleted.";
            }
            this.showStatusUpdate = true;
        },

        clearComplete: function () {

            this.completedItems = [];

        },

        completeAll: function () {

            if (this.listItems.length == 0) {
                this.statusUpdate = "Cannot complete any tasks unless you create some first.";
            } else {
                for (let i = 0; i < this.listItems.length; i++) {
                    this.completedItems.push(this.listItems[i]);
                }
                this.listItems = [];
                this.statusUpdate = "All items completed.";
            }
            this.showStatusUpdate = true;
        }

    },

    computed: {

        toggleTextUpdate: function () {

            if (this.showCurrent) {
                return "Show Completed Tasks (" + this.completedItems.length + ")";
            } else {
                return "Show Current Tasks (" + this.listItems.length + ")";
            }

        },

        toggleStatusUpdate: function () {

        }

    }

});
