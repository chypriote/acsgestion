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


    // Blog settings
    $form['settings']['blog'] = array(
        '#type' => 'details',
        '#title' => t('Blog settings'),
        '#open' => FALSE,
    );

    $form['settings']['blog']['blog_style'] = array(
        '#type' => 'select',
        '#title' => t('Default layout'),
        '#options' => array(
            'standard' => t('Standard'),
            'center' => t('Center'),
            'medium' => t('Medium'),
        ),
        '#default_value' => theme_get_setting('blog_style', 'megaw'),
    );
    $form['settings']['blog']['blog_sidebar'] = array(
        '#type' => 'select',
        '#title' => t('Default sidebar'),
        '#options' => array(
            'none' => t('None'),
            'left' => t('Left'),
            'right' => t('Right'),
        ),
        '#default_value' => theme_get_setting('blog_sidebar', 'megaw'),
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

function megaw_second_logo_validate($element, FormStateInterface $form_state) {
    global $base_url;

    $validators = array('file_validate_extensions' => array('png gif jpg jpeg apng svg'));
    $file = file_save_upload('second_logo', $validators, "public://", NULL, FILE_EXISTS_REPLACE);
    $file1 = file_save_upload('scroll_logo', $validators, "public://", NULL, FILE_EXISTS_REPLACE);
    $file2 = file_save_upload('scroll_logo_retina', $validators, "public://", NULL, FILE_EXISTS_REPLACE);
    
    if (!empty($file)) {
        // change file's status from temporary to permanent and update file database
        if ((is_object($file[0]) == 1)) {
            $file[0]->status = FILE_STATUS_PERMANENT;
            $file[0]->save();
            $uri = $file[0]->getFileUri();
            $file_url = file_create_url($uri);
            $file_url = str_ireplace($base_url, '', $file_url);
            $form_state->setValue('second_logo_file', $file_url);
        }
    }
    
        if (!empty($file1)) {
        // change file's status from temporary to permanent and update file database
        if ((is_object($file1[0]) == 1)) {
            $file1[0]->status = FILE_STATUS_PERMANENT;
            $file1[0]->save();
            $uri = $file1[0]->getFileUri();
            $file_url = file_create_url($uri);
            $file_url = str_ireplace($base_url, '', $file_url);
            $form_state->setValue('scroll_logo_file', $file_url);
        }
    }
    
        if (!empty($file2)) {
        // change file's status from temporary to permanent and update file database
        if ((is_object($file2[0]) == 1)) {
            $file2[0]->status = FILE_STATUS_PERMANENT;
            $file2[0]->save();
            $uri = $file2[0]->getFileUri();
            $file_url = file_create_url($uri);
            $file_url = str_ireplace($base_url, '', $file_url);
            $form_state->setValue('scroll_logo_retina_file', $file_url);
        }
    }
}
