"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 选择树视图控制器（部件视图）
 *
 * @class IBizPickupTreeViewController
 * @extends {IBizTreeViewController}
 */
var IBizPickupTreeViewController = /** @class */ (function (_super) {
    __extends(IBizPickupTreeViewController, _super);
    /**
     * 是否支持多项数据选择
     *
     * @type {boolean}
     * @memberof IBizPickupTreeViewController
     */
    // @Input()
    // multiselect: boolean;
    /**
     * 多数据部件加载所有数据
     *
     * @type {EventEmitter<any>}
     * @memberof IBizPickupTreeViewController
     */
    // @Output()
    // allData: EventEmitter<any> = new EventEmitter();
    /**
     * 数据选中事件，向外输出处理
     *
     * @type {EventEmitter<any>}
     * @memberof IBizPickupTreeViewController
     */
    // @Output()
    // selectionChange: EventEmitter<any> = new EventEmitter();
    /**
     * 数据激活事件，向外输出处理
     *
     * @type {EventEmitter<any>}
     * @memberof IBizPickupTreeViewController
     */
    // @Output()
    // dataActivated: EventEmitter<any> = new EventEmitter();
    /**
     * Creates an instance of IBizPickupTreeViewController.
     * 创建 IBizPickupTreeViewController 实例
     *
     * @param {*} [opts={}]
     * @memberof IBizPickupTreeViewController
     */
    function IBizPickupTreeViewController(opts) {
        if (opts === void 0) { opts = {}; }
        return _super.call(this, opts) || this;
    }
    /**
     * 获取树部件
     *
     * @returns {*}
     * @memberof IBizPickupTreeViewController
     */
    IBizPickupTreeViewController.prototype.getTree = function () {
        return this.getControl('tree');
    };
    /**
     * 是否支持快速搜索
     *
     * @returns {boolean}
     * @memberof IBizPickupTreeViewController
     */
    IBizPickupTreeViewController.prototype.isEnableQuickSearch = function () {
        return false;
    };
    /**
     * 树部件数据选中
     *
     * @param {Array<any>} datas
     * @memberof IBizPickupTreeViewController
     */
    IBizPickupTreeViewController.prototype.onSelectionChange = function (datas) {
        _super.prototype.onSelectionChange.call(this, datas);
        // this.selectionChange.emit(datas);
        this.$vue.$emit('selection-change', datas);
    };
    /**
     * 树部件数据激活
     *
     * @param {Array<any>} datas
     * @memberof IBizPickupTreeViewController
     */
    IBizPickupTreeViewController.prototype.onDataActivated = function (datas) {
        _super.prototype.onDataActivated.call(this, datas);
        // this.dataActivated.emit(datas);
        this.$vue.$emit('data-activated', datas);
    };
    /**
     * 树部件数据加载完成
     *
     * @param {Array<any>} datas
     * @memberof IBizPickupTreeViewController
     */
    IBizPickupTreeViewController.prototype.onTreeLoad = function (datas) {
        _super.prototype.onTreeLoad.call(this, datas);
        var _datas = this.doTreeDatas(datas);
        // this.allData.emit(_datas);
    };
    /**
     * 处理所有树数据
     *
     * @private
     * @param {Array<any>} datas
     * @returns {Array<any>}
     * @memberof IBizPickupTreeViewController
     */
    IBizPickupTreeViewController.prototype.doTreeDatas = function (datas) {
        var _this = this;
        var _datas = [];
        datas.forEach(function (data) {
            var _data = {};
            Object.assign(_data, data);
            if (data.items && data.items.length > 0) {
                var _items = _this.doTreeDatas(data.items).slice();
                delete _data.items;
                _datas.push.apply(_datas, _items);
            }
            _datas.push(_data);
        });
        return _datas;
    };
    return IBizPickupTreeViewController;
}(IBizTreeViewController));