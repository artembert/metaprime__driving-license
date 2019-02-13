new Vue({
    el: '#app',
    data: () => ({
        items: ['A', 'B', 'C', 'D', 'E'],
        driverCat: '12211',
        selectedArray: []
    }),
    methods: {
        getSelectedArray() {
            this.selectedArray = [];
            this.selectedArray = this.driverCat
                .split('')
                .map((category, index) => {
                    let categoryName = this.items[index];
                    return category === '2' ? categoryName : ''
                })
                .filter((category) => {
                    return category.length
                })
        },
        updateDriveCatString() {
            this.driverCat = this.items.map((category) => {
                return this.selectedArray.includes(category) ? 2 : 1
            })
                .join('')
        }
    },
    created() {
        this.getSelectedArray();
    },
});
