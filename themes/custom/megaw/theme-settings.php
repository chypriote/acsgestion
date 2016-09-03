<?php

use Drupal\Component\Utility\Html;
use Drupal\Core\Form\FormStateInterface;
use Drupal\system\Form\ThemeSettingsForm;
use Drupal\file\Entity\File;
use Drupal\Core\Url;

function megaw_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state) {
    $form['settings'] = array(
        '#type' => 'details',
        '#title' => t('Theme settings'),
        '#open' => TRUE,
    );
$form['settings']['header'] = array(
        '#type' => 'details',
        '#title' => t('Logo retina'),
        '#open' => TRUE,
  );
    $form['settings']['header']['megaw_logo_2'] = array(
        '#type' => 'details',
        '#title' => t('Second logo'),
        '#open' => FALSE,
    );
    //logo 2 - retina
    $form['settings']['header']['megaw_logo_2']['second_logo_file'] = array(
        '#type' => 'textfield',
        '#title' => t('URL of the retina logo image'),
        '#default_value' => theme_get_setting('second_logo_file'),
        '#description' => t('Enter a URL logo image.'),
        '#size' => 40,
        '#maxlength' => 512,
    );
    $form['settings']['header']['megaw_logo_2']['second_logo'] = array(
        '#type' => 'file',
        '#title' => t('Upload retina logo image'),
        '#size' => 40,
        '#attributes' => array('enctype' => 'multipart/form-data'),
        '#description' => t('If you don\'t jave direct access to the server, use this field to upload your logo image. Uploads limited to .png .gif .jpg .jpeg .apng .svg extensions'),
        '#element_validate' => array('megaw_second_logo_validate'),
    );
    //logo 3 - scroll
     $form['settings']['header']['megaw_logo_3'] = array(
        '#type' => 'details',
        '#title' => t('Second scroll logo'),
        '#open' => FALSE,
    );
    $form['settings']['header']['megaw_logo_3']['scroll_logo_file'] = array(
        '#type' => 'textfield',
        '#title' => t('URL of the second scroll logo image'),
        '#default_value' => theme_get_setting('scroll_logo_file'),
        '#description' => t('Enter a URL logo image.'),
        '#size' => 40,
        '#maxlength' => 512,
    );
    $form['settings']['header']['megaw_logo_3']['scroll_logo'] = array(
        '#type' => 'file',
        '#title' => t('Upload second scroll logo image'),
        '#size' => 40,
        '#attributes' => array('enctype' => 'multipart/form-data'),
        '#description' => t('If you don\'t jave direct access to the server, use this field to upload your logo image. Uploads limited to .png .gif .jpg .jpeg .apng .svg extensions'),
        '#element_validate' => array('megaw_scroll_logo_validate'),
    );
    // logo 4 - scroll logo
     $form['settings']['header']['megaw_logo_4'] = array(
        '#type' => 'details',
        '#title' => t('Scroll_logo_retina'),
        '#open' => FALSE,
    );
      $form['settings']['header']['megaw_logo_4']['scroll_logo_retina_file'] = array(
        '#type' => 'textfield',
        '#title' => t('URL of the scroll logo retina image'),
        '#default_value' => theme_get_setting('scroll_logo_retina_file'),
        '#description' => t('Enter a URL logo image.'),
        '#size' => 40,
        '#maxlength' => 512,
    );
    $form['settings']['header']['megaw_logo_4']['scroll_logo_retina'] = array(
        '#type' => 'file',
        '#title' => t('Upload scroll logo retina image'),
        '#size' => 40,
        '#attributes' => array('enctype' => 'multipart/form-data'),
        '#description' => t('If you don\'t jave direct access to the server, use this field to upload your logo image. Uploads limited to .png .gif .jpg .jpeg .apng .svg extensions'),
        '#element_validate' => array('megaw_scroll_logo_retina_validate'),
    );

    $form['settings']['general_setting'] = array(
        '#type' => 'details',
        '#title' => t('General Settings'),
        '#open' => FALSE,
    );

    $form['settings']['general_setting']['general_setting_tracking_code'] = array(
        '#type' => 'textarea',
        '#title' => t('Tracking Code'),
        '#default_value' => theme_get_setting('general_setting_tracking_code', 'megaw'),
    );


    // custom css
    $form['settings']['custom_css'] = array(
        '#type' => 'details',
        '#title' => t('Custom CSS'),
        '#open' => FALSE,
    );


    $form['settings']['custom_css']['custom_css'] = array(
        '#type' => 'textarea',
        '#title' => t('Custom CSS'),
        '#default_value' => theme_get_setting('custom_css', 'megaw'),
        '#description' => t('<strong>Example:</strong><br/>h1 { font-family: \'Metrophobic\', Arial, serif; font-weight: 400; }')
    );

}