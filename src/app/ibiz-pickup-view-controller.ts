/**
 * 单项选择视图控制器
 *
 * @class IBizPickupViewController
 * @extends {IBizMainViewController}
 */
class IBizPickupViewController extends IBizMainViewController {

    /**
     * 按钮文本--确定
     *
     * @type {string}
     * @memberof IBizPickupViewController
     */
    public okBtnText: string = '确定';

    /**
     * 按钮文本--取消
     *
     * @type {string}
     * @memberof IBizPickupViewController
     */
    public cancelBtnText: string = '取消';

    /**
     * 是否选中
     *
     * @type {boolean}
     * @memberof IBizPickupViewController
     */
    public isSelect: boolean = false;

    /**
     * Creates an instance of IBizPickupViewController.
     * 创建 IBizPickupViewController 实例
     * 
     * @param {*} [opts={}] 
     * @memberof IBizPickupViewController
     */
    constructor(opts: any = {}) {
        super(opts);
    }

    /**
     * 视图部件初始化
     *
     * @memberof IBizPickupViewController
     */
    public onInitComponents(): void {
        super.onInitComponents();

        const pickupViewPanel = this.getPickupViewPanel();
        if (pickupViewPanel) {
            // 选择视图面板数据选中
            pickupViewPanel.on(IBizPickupViewPanel.SELECTIONCHANGE).subscribe((args) => {
                this.onSelectionChange(args);
            });
            // 选择视图面板数据激活
            pickupViewPanel.on(IBizPickupViewPanel.DATAACTIVATED).subscribe((args) => {
                this.onDataActivated(args);
            });
        }
    }

    /**
     * 数据选择，确定功能
     * 
     * @memberof IBizPickupViewController
     */
    public onClickOkButton(): void {
        const pickupViewPanel = this.getPickupViewPanel();
        if (!pickupViewPanel) {
            return;
        }
        if (pickupViewPanel.getSelections().length !== 1) {
            return;
        }
        // this.nzModalSubject.next({ ret: 'OK', selection: pickupViewPanel.getSelections() });
        // this.nzModalSubject.next('DATACHANGE');
        // this.closeWindow();
        this.dataChange({ ret: 'OK', selections: pickupViewPanel.getSelections() });
        this.closeModal();
    }

    /**
     * 取消显示选择视图
     * 
     * @param {string} type 
     * @memberof IBizPickupViewController
     */
    public onClickCancelButton(type: string): void {
        // this.nzModalSubject.destroy(type);
        this.closeModal();
    }

    /**
     * 接收选择视图数据传递
     *
     * @param {Array<any>} args
     * @memberof IBizPickupViewController
     */
    public onSelectionChange(args: Array<any>): void {
        this.isSelect = args.length > 0 ? true : false;
    }

    /**
     * 数据选中激活
     *
     * @param {Array<any>} args
     * @memberof IBizPickupViewController
     */
    public onDataActivated(args: Array<any>): void {
        this.onSelectionChange(args);
        this.onClickOkButton();
    }

    /**
     * 获取选择视图面板
     * 
     * @returns {*} 
     * @memberof IBizPickupViewController
     */
    public getPickupViewPanel(): any {
        return this.getControl('pickupviewpanel');
    }

}

