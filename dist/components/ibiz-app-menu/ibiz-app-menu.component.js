"use strict";
Vue.component('ibiz-app-menu', {
    template: "\n    <i-menu theme=\"dark\" width=\"auto\" class=\"ibiz-app-menu\"  @on-select=\"onSelect($event)\" active-name=\"ctrl.selection.id\">\n        <template v-for=\"(item0, index0) in ctrl.items\">\n            <!---  \u4E00\u7EA7\u83DC\u5355\u6709\u5B50\u9879 begin  --->\n            <template v-if=\"item0.items && item0.items.length > 0\">\n                <submenu :name=\"item0.id\">\n                    <template slot=\"title\">\n                        <span><i :class=\"[item0.iconcls == '' ? 'fa fa-cogs' : item0.iconcls ]\" aria-hidden=\"true\"></i> {{ item0.text }}</span>\n                    </template>\n                    <template v-for=\"(item1, index1) in item0.items\">\n                        <!---  \u4E8C\u7EA7\u83DC\u5355\u6709\u5B50\u9879 begin  --->\n                        <template v-if=\"item1.items && item1.items.length > 0\">\n                            <submenu :name=\"item1.id\">\n                                <template slot=\"title\">\n                                    <span>{{ item1.text }}</span>\n                                </template>\n                                <!---  \u4E09\u7EA7\u83DC\u5355 begin  --->\n                                <template v-for=\"(item2, index2) in item1.items\">\n                                    <menu-item :name=\"item2.id\">\n                                        <span>{{ item2.text }}</span>\n                                    </menu-item>\n                                </template>\n                                <!---  \u4E09\u7EA7\u83DC\u5355\u6709 begin  --->\n                            </submenu>\n                        </template>\n                        <!---  \u4E8C\u7EA7\u83DC\u5355\u6709\u5B50\u9879 end  --->\n                        <!---  \u4E8C\u7EA7\u83DC\u5355\u65E0\u5B50\u9879 begin  --->\n                        <template v-else>\n                            <menu-item :name=\"item1.id\">\n                                <span>{{ item1.text }}</span>\n                            </menu-item>\n                        </template>\n                        <!---  \u4E8C\u7EA7\u83DC\u5355\u65E0\u5B50\u9879 end  --->\n                    </template>\n                </submenu>\n            </template>\n            <!---  \u4E00\u7EA7\u83DC\u5355\u6709\u5B50\u9879 end  --->\n            <!---  \u4E00\u7EA7\u83DC\u5355\u65E0\u5B50\u9879 begin  --->\n            <template v-else>\n                <menu-item :name=\"item0.id\">\n                    <span><i :class=\"[item0.iconcls == '' ? 'fa fa-cogs' : item0.iconcls ]\" aria-hidden=\"true\" style=\"margin-right:8px;\"></i>{{ item0.text }}</span>\n                </menu-item>\n            </template>\n            <!---  \u4E00\u7EA7\u83DC\u5355\u65E0\u5B50\u9879 end  --->\n        </template>\n    </i-menu>\n    ",
    props: ['ctrl', 'viewController'],
    data: function () {
        var data = {};
        return data;
    },
    mounted: function () {
    },
    methods: {
        onSelect: function (name) {
            if (this.ctrl && !Object.is(name, '')) {
                var item = this.ctrl.getItem(name, this.ctrl.getItems());
                this.ctrl.onSelectChange(item);
            }
        }
    }
});