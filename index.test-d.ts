import {expectType} from 'tsd';
import neoRegex = require('.');

expectType<RegExp>(neoRegex());
expectType<RegExp>(neoRegex({exact: true}));
