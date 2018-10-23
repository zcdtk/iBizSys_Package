/**
 * 导航视图控制器
 *
 * @class IBizExpViewController
 * @extends {IBizMianViewController}
 */
class IBizExpViewController extends IBizMianViewController {

    /**
     * Creates an instance of IBizExpViewController.
     * 创建 IBizExpViewController 实例
     * 
     * @param {*} [opts={}]
     * @memberof IBizExpViewController
     */
    constructor(opts: any = {}) {
        super(opts);
        let _this = this;
    }

    public init(opts:any = {}):void {
        super.init(opts);
        const expCtrl = this.getExpCtrl();
        if (expCtrl) {
            expCtrl.on(IBizTreeExpBar.SELECTIONCHANGE, (item) => {
                this.onExpCtrlSelectionChange(item);
            });

            // expCtrl.on(IBizTreeExpBar.LOADED, (item) => {
            //     this.onExpCtrlLoaded(item);
            // });
        }
    }

    /**
     * 视图部件初始化
     *
     * @memberof IBizExpViewController
     */
    public onInit(): void {

    }

    /**
     * 初始化导航部件
     * 
     * @memberof IBizExpViewController
     */
    public onInitComponents(): void {
        
    }

    /**
     * 导航部件加载
     * 
     * @memberof IBizExpViewController
     */
    public onLoad(): void {
        const expCtrl = this.getExpCtrl();
        if (expCtrl) {
            expCtrl.load({});
        }
    }

    /**
     * 视图销毁
     *
     * @memberof IBizExpViewController
     */
    // public onDestroy(): void {
    //     super.onDestroy();
    //     if (this.$expRouteRvents) {
    //         this.$expRouteRvents.unsubscribe();
    //     }
    // }

    /**
     * 获取导航部件
     * 
     * @returns {*} 
     * @memberof IBizExpViewController
     */
    public getExpCtrl(): any {
        let expctrl = this.getExpBar();
        if (expctrl) {
            return expctrl;
        }

        expctrl = this.getExpTab();
        if (expctrl) {
            return expctrl;
        }

        return undefined;
    }

    /**
     * 获取导航部件
     * 
     * @returns {*} 
     * @memberof IBizExpViewController
     */
    public getExpBar(): any {
        return this.getControl('expbar');
    }

    /**
     * 获取导航分页部件
     * 
     * @returns {*} 
     * @memberof IBizExpViewController
     */
    public getExpTab(): any {
        return this.getControl('exptab');
    }

    /**
     * 导航部件值选中变化
     *
     * @param {*} [item={}]
     * @memberof IBizExpViewController
     */
    public onExpCtrlSelectionChange(item: any = {}): void {

    }

    /**
     * 导航树部件加载完成
     *
     * @param {*} [item={}]
     * @memberof IBizExpViewController
     */
    public onExpCtrlLoaded(item: any = {}): void {

    }

    /**
     * 获取导航项视图参数，在发布视图控制器内重写
     * 
     * @param {*} [arg={}] 
     * @returns {*} 
     * @memberof IBizExpViewController
     */
    public getExpItemView(arg: any = {}): any {
        return undefined;
    }

    /**
     * 获取新建导航视图参数，在发布视图控制器中重写
     * 
     * @param {*} [arg={}] 
     * @returns {*} 
     * @memberof IBizExpViewController
     */
    public getNewDataView(arg: any = {}): any {
        return undefined;
    }

    /**
     * 获取编辑导航视图参数，在发布视图控制器中重写
     * 
     * @param {*} [arg={}] 
     * @returns {*} 
     * @memberof IBizExpViewController
     */
    public getEditDataView(arg: any = {}): any {
        return undefined;
    }

    /**
     * 节点路由是否存在
     *
     * @param {string} routeLink
     * @returns {boolean}
     * @memberof IBizExpViewController
     */
    public hasRoute(routeLink: string): boolean {
        let hasRoute = false;
        // if (this.$routeActive && this.$routeActive.routeConfig && this.$routeActive.routeConfig.children !== null) {
        //     const index: number = this.$routeActive.routeConfig.children.findIndex(item => Object.is(item.path, routeLink));
        //     hasRoute = (index !== -1) ? true : false;
        // }
        return hasRoute;
    }

    /**
     * 是否需要手动跳转路由
     * 
     * @private
     * @param {*} [item={}] 
     * @returns {boolean} 
     * @memberof IBizTreeExpViewController
     */
    public isRefreshView(routeSting: string): boolean {
        let refreshView = false;
        // if (this.$routeActive && this.$routeActive.children && this.$routeActive.children.length > 0) {
        //     const arr = this.$routeActive.children[0];
        //     if (Object.is(arr.routeConfig.path, routeSting.toLowerCase())) {
        //         refreshView = true;
        //     }
        // }
        return refreshView;
    }

    /**
     * 打开导航子视图
     *
     * @param {*} [item={}]
     * @returns {void}
     * @memberof IBizExpViewController
     */
    public openExpChildView(item: any = {}): void {
        if (!item || Object.keys(item).length === 0) {
            return;
        }
        const view = this.getExpItemView(item.expitem);
        if (!view) {
            return;
        }
        const hasRouter: boolean = this.hasRoute(view.routelink);
        if (!hasRouter) {
            return;
        }

        let data: any = {};
        Object.assign(data, item.expitem.viewparam);
        if (this.isRefreshView(view.routelink)) {
            Object.assign(data, { refreshView: true });
        }
        const exp = this.getExpBar();
        if (exp) {
            exp.setSelectItem(item);
        }
        // this.openView(view.routelink, data);
    }
}