//HTML
<el-input v-model='searchKey' class="search-box" :placeholder="$t('signage.search')"><i
    slot="suffix" class="el-input__icon el-icon-search three-dots-menu" ></i></el-input>
                                    
//Javascript
data: {
    searchKey: '',
    innerSearchKey: '',
}

computed: {
  filterData () {
    var self = this;
    if (!this.innerSearchKey)
        return self.signageData.slice();
    else
        return self.signageData.filter(function (row) {
            var found = false;
            if (row != null && (typeof row == "object")) {
                Object.keys(row).map(function (propName, index) {
                    var propValue = row[propName];
                    if (propValue != null && (typeof propValue == "object")) {
                        Object.keys(propValue).map(function (childPropName, index) {
                            var propChildValue = propValue[childPropName];
                            if (propChildValue) {
                                propChildValue = propChildValue.toString().toLowerCase().trim();
                                if (propChildValue.includes(self.innerSearchKey)) {
                                    found = true;
                                }
                            }
                        });
                    }
                    else {
                        if (propValue) {
                            propValue = propValue.toString().toLowerCase().trim();
                            if (propValue.includes(self.innerSearchKey)) {
                                found = true;
                            }
                        }
                    }
                });
            }
            if (found) return row;
        });
    },
}

watch: {
    searchKey() {
        this.updateInnerSearchKey()
    }
},

function updateInnerSearchKey: Lodash.debounce(function () {
    this.innerSearchKey = this.searchKey.toLowerCase().trim();
}, 200),
