<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

let input = ref("");
let radio4 = ref("6期");

let tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, ",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, ",
  },
];
function onButtonTap() {
  ElMessage("this is a message");
}
const count = ref(0);
</script>

<template>
  <div class="fs15 fw700 pbt16 prl4">代客下单</div>
  <div>
    <div class="bgray1 fw700 p4">客户信息</div>
    <div class="dy pbt16 prl4">
      <div class="" style="margin-right: 50px">公司名称：暂无</div>
      <div style="margin-right: 50px">联系人：张三</div>
      <div style="margin-right: 50px">联系方式：17709205217</div>
      <div style="margin-right: 50px">地区名称：西安市高新区</div>
      <div style="margin-right: 50px">业务机会：注册+代账</div>
    </div>
  </div>
  <div>
    <div class="bgray1 fw700 p4">商品清单</div>
    <div class="dy pbt16 prl4">
      <div>
        <ElButton type="primary" size="small" @click="onButtonTap">新增商品</ElButton>
      </div>
    </div>
  </div>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="序号" width="180" />
      <el-table-column prop="name" label="商品名称" width="180" />
      <el-table-column prop="address" label="规格" />
      <el-table-column prop="address" label="单价" />
      <el-table-column prop="address" label="数量" />
      <el-table-column prop="address" label="小计" />
      <el-table-column prop="address" label="操作" />
    </el-table>
    <div class="pbt16 prl4">
      <div class="dy">
        订单改价：<el-input
          size="small"
          v-model="input"
          style="width: 200px"
          placeholder="Please input"
        />
      </div>
      <div class="dey">
        <div>
          <div>订单总额：46000</div>
          <div>应付总额：46000</div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="bgray1 fw700 p4">金额及收款信息</div>
    <div class="pbt16 prl4">
      <div class="ds">
        <div class="" style="margin-right: 50px">合同金额：46000</div>
        <div class="" style="margin-right: 50px">付款方式：微信</div>
      </div>
      <div class="over16"></div>
      <div class="dy">
        <div>分期计划：</div>
        <el-radio-group v-model="radio4" size="mini">
          <el-radio-button label="3期" width="180"></el-radio-button>
          <el-radio-button label="6期"></el-radio-button>
          <el-radio-button label="12期"></el-radio-button>
        </el-radio-group>
      </div>
          <div class="over16"></div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="付款计划" width="180" />
        <el-table-column prop="address" label="金额" />
        <el-table-column prop="address" label="日期" />
        <el-table-column prop="address" label="说明" />
        <el-table-column prop="address" label="操作" />
      </el-table>
    </div>
  </div>
</template>
