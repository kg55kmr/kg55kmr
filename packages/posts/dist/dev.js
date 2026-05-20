import { g as getRoot, p as processPosts, w as write } from './root-SUnb-xWm.js';
import 'fs';
import 'path';
import 'fs/promises';
import 'fdir';
import 'gray-matter';
import './index.js';
import 'workspace-root';

const root = await getRoot();
const data = await processPosts(root);
write(root, data);
