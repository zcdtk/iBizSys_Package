Vue.component('ibiz-app-menu', {
    template: `
    <i-menu theme="dark" width="auto" class="ibiz-app-menu"  @on-select="onSelect($event)" active-name="ctrl.selection.id">
        <template v-for="(item0, index0) in ctrl.items">
            <!---  一级菜单有子项 begin  --->
            <template v-if="item0.items && item0.items.length > 0">
                <submenu :name="item0.id">
                    <template slot="title">
                        <span><i :class="[item0.iconcls == '' ? 'fa fa-cogs' : item0.iconcls ]" aria-hidden="true"></i> {{ item0.text }}</span>
                    </template>
                    <template v-for="(item1, index1) in item0.items">
                        <!---  二级菜单有子项 begin  --->
                        <template v-if="item1.items && item1.items.length > 0">
                            <submenu :name="item1.id">
                                <template slot="title">
                                    <span>{{ item1.text }}</span>
                                </template>
                                <!---  三级菜单 begin  --->
                                <template v-for="(item2, index2) in item1.items">
                                    <menu-item :name="item2.id">
                                        <span>{{ item2.text }}</span>
                                    </menu-item>
                                </template>
                                <!---  三级菜单有 begin  --->
                            </submenu>
                        </template>
                        <!---  二级菜单有子项 end  --->
                        <!---  二级菜单无子项 begin  --->
                        <template v-else>
                            <menu-item :name="item1.id">
                                <span>{{ item1.text }}</span>
                            </menu-item>
                        </template>
                        <!---  二级菜单无子项 end  --->
                    </template>
                </submenu>
            </template>
            <!---  一级菜单有子项 end  --->
            <!---  一级菜单无子项 begin  --->
            <template v-else>
                <menu-item :name="item0.id">
                    <span><i :class="[item0.iconcls == '' ? 'fa fa-cogs' : item0.iconcls ]" aria-hidden="true" style="margin-right:8px;"></i>{{ item0.text }}</span>
                </menu-item>
            </template>
            <!---  一级菜单无子项 end  --->
        </template>
    </i-menu>
    `,
    props: ['ctrl', 'viewController'],
    data: function () {
        var data = {};
        return data;
    },
    mounted: function () {
    },
    methods: {
        onSelect(name) {
            if (this.ctrl && !Object.is(name, '')) {
                let item = this.ctrl.getItem(name, this.ctrl.getItems());
                this.ctrl.onSelectChange(item);
            }
        }
    }
});