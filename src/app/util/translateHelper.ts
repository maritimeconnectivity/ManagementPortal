/*
 * Copyright (c) 2024 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TranslateService } from "@ngx-translate/core";
import { langs } from "./langs";

export const applyTranslateToMenu = (translate: TranslateService, menu: object[]) => {
    menu.forEach(e => {
      applyTranslateToSingleMenu(translate, e);
    });
};

export const applyTranslateToSingleMenu = (translate: TranslateService, menu: object) => {
    if (menu['title']) {
        translate.get(menu['title']).subscribe(res => menu['title'] = res);
    }
    if (menu['children']) {
        menu['children'].forEach(ee => {
        if (ee['title']) {
            translate.get(ee['title']).subscribe(res => ee['title'] = res);
        }
        });
    }
};

export const addLangs = (translate: TranslateService) => {
    translate.addLangs(langs);
};

export const loadLang = (translate: TranslateService): string => {
    const locale = localStorage.getItem('locale') !== undefined && langs.includes(localStorage.getItem('locale')) ? localStorage.getItem('locale') : 'en-GB';
    translate.setDefaultLang(locale);
    translate.use(locale);
    return locale;
};

export const changeLang = (translate: TranslateService, language: string) => {
    translate.use(language);
    translate.setDefaultLang(language);
    localStorage.setItem('locale', language);
};
