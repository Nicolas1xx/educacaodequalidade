import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests/e2e',fullyParallel:false,workers:1,timeout:45000,use:{baseURL:process.env.BASE_URL??'http://127.0.0.1:5173',headless:true,channel:'chrome',screenshot:'only-on-failure'},reporter:[['list'],['json',{outputFile:'test-results/results.json'}]]});
