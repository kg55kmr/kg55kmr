import { g as getRoot, p as processPosts, w as write } from './root-Bf0Bj_gd.js';
import 'fs';
import 'path';
import 'fs/promises';
import 'fdir';
import 'gray-matter';
import 'workspace-root';

const root = await getRoot();
const data = await processPosts(root);
write(root, data);
